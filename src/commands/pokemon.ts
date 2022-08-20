import { getPokemon } from '../api/pokemonApi'
import { MessageEmbed } from 'discord.js'

export default async (message) => {
  if (message.author.bot) return

  if (message.content.toLowerCase().startsWith('!pokemon')) {
    const pokemon = message.content.toLowerCase().split(' ')[1]

    console.log(pokemon)

    try {
      const pokeData = await getPokemon(pokemon)
      const { sprites, stats, weight, name, id, base_experience } = pokeData
      const embed = new MessageEmbed()
        .setTitle(`${name} #${id}`)
        .setThumbnail(`${sprites.front_default}`)
        .addFields([
          { name: 'Weight', value: `${weight}` },
          { name: 'Base Experiece', value: `${base_experience}` }
        ])

      stats.forEach((stat) => embed.addFields({ name: `${stat.stat.name}`, value: `${stat.base_stat}`, inline: true }))

      message.reply({ embeds: [embed] })
    } catch (err) {
      message.reply(`Walang pokemon na ganyan gago.`)
    }
  }
}
