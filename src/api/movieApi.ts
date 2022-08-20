import axios from 'axios'

const API_KEY = process.env.IMDB_API_KEY
const API_URL = 'https://imdb-api.com/en/API/SearchMovie'

export const getMovie = async (movie: string) => {
  const response = await axios.get(`${API_URL}/${API_KEY}/${movie}`)
  const result = response.data

  return result
}
