import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildChannel, Role } from 'discord.js'

export default async function inviterole(_client: Client, interaction: CommandInteraction) {
  const role = interaction.options.getRole('role')
  await (interaction.channel as GuildChannel).permissionOverwrites.create(role as Role, {
    VIEW_CHANNEL: true,
    CONNECT: true
  })

  interaction.reply(`Invited <@&${role.id}> to <#${interaction.channelId}>`)
}

export const inviteroleBuilder = new SlashCommandBuilder()
  .setName('inviterole')
  .setDescription('Invite a role to this channel')
  .addRoleOption((option) => option.setName('role').setDescription('Server Role').setRequired(true))
  .setDMPermission(false)
