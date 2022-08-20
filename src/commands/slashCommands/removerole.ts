import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, Role } from 'discord.js'

export default async function removerole(_client: Client, interaction: CommandInteraction) {
  const user = interaction.options.getUser('user', true)
  const role = interaction.options.getRole('role', true)

  const guildUser = await interaction.guild.members.fetch(user)

  guildUser.roles.remove(role as Role)

  interaction.reply('Removed role from user')
}

export const removeroleBuilder = new SlashCommandBuilder()
  .setName('removerole')
  .setDescription('Removes a role from user')
  .addUserOption((option) => option.setName('user').setDescription('User to remove a role from').setRequired(true))
  .addRoleOption((option) => option.setName('role').setDescription('Role to remove').setRequired(true))
  .setDMPermission(false)
