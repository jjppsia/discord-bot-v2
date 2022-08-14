import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, Role } from 'discord.js'

export default async function deleterole(_client: Client, interaction: CommandInteraction) {
  const role = interaction.options.getRole('role')
  await interaction.guild.roles.delete(role as Role)

  interaction.reply(`Code \`${role.name}\` with ID \`${role.id}\` was deleted`)
}

export const deleteroleBuilder = new SlashCommandBuilder()
  .setName('deleterole')
  .setDescription('Delete a role')
  .addRoleOption((option) => option.setName('role').setDescription('Server Role').setRequired(true))
  .setDMPermission(false)
