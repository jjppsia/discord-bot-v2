import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, Role } from 'discord.js'

export default async function roledelete(_client: Client, interaction: CommandInteraction) {
  const role = interaction.options.getRole('role')
  await interaction.guild.roles.delete(role as Role)

  interaction.reply(`Code \`${role.name}\` with ID \`${role.id}\` was deleted`)
}

export const roledeleteBuilder = new SlashCommandBuilder()
  .setName('roledelete')
  .setDescription('Delete a role')
  .addRoleOption((option) => option.setName('role').setDescription('Server Role').setRequired(true))
  .setDMPermission(false)
