import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, Role } from 'discord.js'

export default function rolesetrole(
  _client: Client,
  interaction: CommandInteraction
) {
  const role1 = interaction.options.getRole('role1', true) as Role
  const role2 = interaction.options.getRole('role2', true) as Role

  role1.members.forEach((member) => member.roles.add(role2))
  interaction.reply(
    `Added <@&${role2.id}> to all ${role1.members.size} member/s of <@&${role1.id}>`
  )
}

export const rolesetroleBuilder = new SlashCommandBuilder()
  .setName('rolesetrole')
  .setDescription('Add a role to all members with role')
  .addRoleOption((option) =>
    option
      .setName('role1')
      .setDescription('Role to add second role to')
      .setRequired(true)
  )
  .addRoleOption((option) =>
    option.setName('role2').setDescription('Role to be added').setRequired(true)
  )
  .setDMPermission(false)
