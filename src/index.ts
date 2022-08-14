import { Client, DiscordAPIError, Intents, TextChannel } from 'discord.js'
import 'dotenv/config'
import commands from './commands'
import { keywords } from './keywords'

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
  partials: ['MESSAGE', 'CHANNEL'],
})

client.once('ready', () => {
  console.log('Ready!')
})

client.on('messageCreate', async (message) => {
  const messageStr = message.content.toLowerCase()
  const data = await keywords.find((document) =>
    ` ${messageStr} `.includes(' ' + document.key + ' ')
  )

  if (data && message.author.id !== client.user.id) {
    message.reply(data.message)
  }
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction
  const command = commands.find((command) => command.name === commandName)
  const auditLogId = String(
    process.env.CHANNEL_AUDIT_LOG || '1008320540320223232'
  )
  const auditLog = (await interaction.guild.channels.fetch(
    auditLogId
  )) as TextChannel

  try {
    if (command) {
      const argListFormatted = interaction.options.data.map((data) => {
        return `${data.name}: ${data.type} = ${data.value}`
      })

      if (argListFormatted.length === 0) argListFormatted.push('no args')
      auditLog.send &&
        (await auditLog.send(
          `<@${interaction.user.id}> used command /${command.name} in <#${
            interaction.channelId
          }> with args:\n\`\`\`${argListFormatted.join('\n')}\`\`\``
        ))
      await command.runner(client, interaction)
    } else {
      interaction.reply(`Command not implemented: /${commandName}`)
    }
  } catch (e) {
    await interaction.reply({
      content: `Error executing command:\`\`\`${
        (e as DiscordAPIError).stack
      }\`\`\``,
      ephemeral: true,
    })
  }
})

client.login(process.env.DISCORD_TOKEN)
