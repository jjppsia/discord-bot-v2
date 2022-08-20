import { SlashCommandBuilder } from '@discordjs/builders'
import axios from 'axios'
import { Client, CommandInteraction } from 'discord.js'
import si from 'systeminformation'

export default async function info(_client: Client, interaction: CommandInteraction) {
  interaction.deferReply({
    ephemeral: true
  })
  const osInfo = await si.osInfo()
  const versions = await si.versions()

  const publicIp = (await axios.get<string>('https://api.ipify.org')).data

  const reply = `
**OS**: ${`${osInfo.platform} ${osInfo.release} ${osInfo.distro}`}
**Architecture**: ${osInfo.arch}
**Node.js Version**: ${versions.node}
**Hostname**: ${osInfo.hostname}
**Public IP**: ${publicIp}
	`

  interaction.editReply(reply)
}

export const infoBuilder = new SlashCommandBuilder()
  .setName('info')
  .setDescription('Gets server info')
  .setDMPermission(false)
