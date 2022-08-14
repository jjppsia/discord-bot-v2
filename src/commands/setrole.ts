import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildMember } from 'discord.js'

export default async function setrole(_client: Client, interaction: CommandInteraction) {
  const member = (await interaction.options.getMember('member', true)) as GuildMember
  const role = await interaction.options.getRole('role', true)
  const guildRole = await interaction.guild.roles.fetch(role.id)

  await member.roles.add(guildRole)

  interaction.reply(`Role <@&${role.id}> added to <@${member.id}>`)
}
export const setroleBuilder = new SlashCommandBuilder()
  .setName('setrole')
  .setDescription('Set a role')
  .addUserOption((option) => option.setName('member').setDescription('Server Member').setRequired(true))
  .addRoleOption((option) => option.setName('role').setDescription('Server Role').setRequired(true))
  .setDMPermission(false)
