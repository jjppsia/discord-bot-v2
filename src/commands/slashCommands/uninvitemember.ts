import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildChannel, GuildMember } from 'discord.js'

export default async function uninvitemember(_client: Client, interaction: CommandInteraction) {
  const member = interaction.options.getMember('member', true) as GuildMember
  await (interaction.channel as GuildChannel).permissionOverwrites.delete(member.user)

  interaction.reply(`Uninvited <@${member.id}> to <#${interaction.channelId}>`)
}

export const uninvitememberBuilder = new SlashCommandBuilder()
  .setName('uninvitemember')
  .setDescription('Uninvites a member')
  .addUserOption((option) => option.setName('member').setDescription('Member to uninvite').setRequired(true))
  .setDMPermission(false)
