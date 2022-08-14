import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildChannel, GuildMember } from 'discord.js'

export default async function invitemember(_client: Client, interaction: CommandInteraction) {
  const member = interaction.options.getMember('member') as GuildMember
  await (interaction.channel as GuildChannel).permissionOverwrites.create(member.user, {
    VIEW_CHANNEL: true,
    CONNECT: true
  })

  interaction.reply(`Invited <@${member.id}> to <#${interaction.channelId}>`)
}

export const invitememberBuilder = new SlashCommandBuilder()
  .setName('invitemember')
  .setDescription('Invite a Discord Server Member to this Channel')
  .addUserOption((option) => option.setName('member').setDescription('Server Member').setRequired(true))
  .setDMPermission(false)
