import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildChannel, Role } from 'discord.js'

export default function uninviterole(_client: Client, interaction: CommandInteraction) {
  const channel = interaction.channel as GuildChannel
  const role = interaction.options.getRole('role', true)
  channel.permissionOverwrites.delete(role as Role)
}

export const uninviteroleBuilder = new SlashCommandBuilder()
  .setName('uninviterole')
  .setDescription('Uninvites a role')
  .addRoleOption((option) => option.setName('role').setDescription('Role to uninvite').setRequired(true))
  .setDMPermission(false)
