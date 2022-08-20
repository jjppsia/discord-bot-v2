import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction } from 'discord.js'
import db from '../../utils/db'

export default async function addkeyword(_client: Client, interaction: CommandInteraction) {
  const { keywords } = await db()
  const key = interaction.options.getString('key').toLowerCase()
  const message = interaction.options.getString('message')

  keywords.insertOne({
    key,
    message
  })

  interaction.reply(`Added a new Keyword:\n**Word:** \`${key}\`\n**Message:** \`${message}\``)
}

export const addkeywordBuilder = new SlashCommandBuilder()
  .setName('addkeyword')
  .setDescription('Add a new keyword to bot-silog')
  .addStringOption((option) =>
    option.setName('key').setDescription('Trigger word (non-case sensitive)').setRequired(true)
  )
  .addStringOption((option) => option.setName('message').setDescription('Message on Trigger Word').setRequired(true))
  .setDMPermission(false)
