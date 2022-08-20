import { getMovie } from '../api/movieApi'
import { MessageEmbed } from 'discord.js'

export default async (message) => {
  if (message.author.bot) return

  if (message.content.toLowerCase().startsWith('!movie')) {
    const movie = message.content

    message.reply({
      content: 'Under development',
      ephemeral: true
    })
  }
}
