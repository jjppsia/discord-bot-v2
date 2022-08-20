import { SlashCommandBuilder } from '@discordjs/builders'
import { CategoryChannel, Client, CommandInteraction, Permissions } from 'discord.js'

export default async function createchannel(_client: Client, interaction: CommandInteraction) {
  const name = interaction.options.getString('name', true)
  const category = interaction.options.getChannel('category', true)
  const channel = await interaction.guild.channels.create(name, {
    parent: category as CategoryChannel,
    permissionOverwrites: [
      {
        id: interaction.user.id,
        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT]
      },
      {
        id: interaction.guild.roles.everyone,
        deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT]
      }
    ]
  })
  interaction.reply(`Created channel <#${channel.id}>`)
}

export const createchannelBuilder = new SlashCommandBuilder()
  .setName('createchannel')
  .setDescription('Creates a channel')
  .addStringOption((option) => option.setName('name').setDescription('Channel Name').setRequired(true))
  .addChannelOption((option) =>
    option.setName('category').setDescription('Category').setRequired(true).addChannelTypes(4)
  )
  .setDMPermission(false)
