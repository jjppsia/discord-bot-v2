import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction } from 'discord.js'
import db from '../../utils/db'

export default async function keywordlist(_client: Client, interaction: CommandInteraction) {
  const { keywords } = await db()
  const keywordList = (await keywords.find().toArray())
    .map((keyword) => {
      return `**${keyword.key}**: \`${keyword.message}\`\n`
    })
    .join('')

  interaction.reply(
    keywordList.length
      ? `List of keywords:\n\n${keywordList}`
      : `The keyword list is empty. Use \`/keywordadd\` command to add a keyword`
  )
}

export const keywordlistBuilder = new SlashCommandBuilder()
  .setName('keywordlist')
  .setDescription('List keywords')
  .setDMPermission(false)
