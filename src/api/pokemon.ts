import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = async (pokemon: string) => {
  const response = await axios.get(`${BASE_URL}/${pokemon}`)
  const result = response.data

  return result
}
