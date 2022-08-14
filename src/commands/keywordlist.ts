import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction } from 'discord.js'
import { keywords } from '../keywords'

export default async function keywordlist(
  _client: Client,
  interaction: CommandInteraction
) {
  const keywordList = await keywords.map((keyword) => {
    return `**${keyword.key}**: \`${keyword.message}\`\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`
  })

  interaction.reply(`Here is a list of keywords:\n${keywordList}`)
}

export const keywordlistBuilder = new SlashCommandBuilder()
  .setName('keywordlist')
  .setDescription('List keywords')
  .setDMPermission(false)
