import { SlashCommandBuilder } from '@discordjs/builders'
import { Client, CommandInteraction, GuildChannel } from 'discord.js'

export default async function invitechannel(
  _client: Client,
  interaction: CommandInteraction
) {
  const channel = interaction.options.getChannel('channel')
  let memberCount: number
  if (channel.type === 'GUILD_TEXT') {
    memberCount = channel.members.map((a) => a).length
    channel.members.forEach(async (member) => {
      await (interaction.channel as GuildChannel).permissionOverwrites.create(
        member.user,
        {
          VIEW_CHANNEL: true,
          CONNECT: true,
        }
      )
    })
  }

  interaction.reply(
    `Invited ${memberCount} member${memberCount === 1 ? '' : 's'} of <#${
      channel.id
    }> to <#${interaction.channel.id}>`
  )
}

export const invitechannelBuilder = new SlashCommandBuilder()
  .setName('invitechannel')
  .setDescription('Invite all members of another channel to this Channel')
  .addChannelOption((option) =>
    option
      .setName('channel')
      .setDescription('Channel to get members from')
      .addChannelTypes(0)
  )
  .setDMPermission(false)
