import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = async (pokemon: string) => {
  const response = await axios.get(`${API_URL}/${pokemon}`)
  const result = response.data

  return result
}
