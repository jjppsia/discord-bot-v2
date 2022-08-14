import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction } from 'discord.js'
import db from '../utils/db'

export default async function keyworddelete(_client: Client, interaction: CommandInteraction) {
  const { keywords } = await db()
  const keyword = interaction.options.getString('key', true)

  await keywords.deleteOne({
    key: keyword
  })

  interaction.reply('Keyword deleted')
}

export const keyworddeleteBuilder = new SlashCommandBuilder()
  .setName('keyworddelete')
  .setDescription('Deletes a keyword')
  .addStringOption((option) => option.setName('key').setDescription('Keyword that will be deleted').setRequired(true))
  .setDMPermission(false)
