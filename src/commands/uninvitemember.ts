import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildChannel, GuildMember } from 'discord.js'

export default function uninvitemember(_client: Client, interaction: CommandInteraction) {
  const channel = interaction.channel as GuildChannel
  const member = interaction.options.getMember('member', true)
  channel.permissionOverwrites.delete(member as GuildMember)
}

export const uninvitememberBuilder = new SlashCommandBuilder()
  .setName('uninvitemember')
  .setDescription('Uninvites a member')
  .addUserOption((option) => option.setName('member').setDescription('Member to uninvite').setRequired(true))
  .setDMPermission(false)
