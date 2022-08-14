import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction } from 'discord.js'

export default async function createrole(_client: Client, interaction: CommandInteraction) {
  const role = await interaction.guild.roles.create({
    name: interaction.options.getString('role'),
    mentionable: true
  })

  interaction.reply(`Role <@&${role.id}> created with ID \`${role.id}\``)
}

export const createroleBuilder = new SlashCommandBuilder()
  .setName('createrole')
  .setDescription('Create a role')
  .addStringOption((option) => option.setName('role').setDescription('Server Role').setRequired(true))
  .setDMPermission(false)
