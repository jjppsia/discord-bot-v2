import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction } from 'discord.js'

export default function myCommand(_client: Client, interaction: CommandInteraction) {
  interaction.reply('Not yet implemented')
}

export const myCommandBuilder = new SlashCommandBuilder()
  .setName('myCommand')
  .setDescription('Sample Command, Change Description')
  .setDMPermission(false)
