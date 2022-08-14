import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildChannel } from 'discord.js'

export default async function leavechannel(_client: Client, interaction: CommandInteraction) {
  await (interaction.channel as GuildChannel).permissionOverwrites.create(interaction.user, {
    VIEW_CHANNEL: false,
    CONNECT: false
  })

  interaction.reply(`User <@${interaction.user.id}> has left this channel (<#${interaction.channelId}>)`)
}

export const leavechannelBuilder = new SlashCommandBuilder()
  .setName('leavechannel')
  .setDescription('Leave this Discord Channel. (Note you must ask someone else in the channel to add you back.)')
  .setDMPermission(false)
