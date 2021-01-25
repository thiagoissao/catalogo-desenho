import axios from 'axios'

export const BASE_URL = 'https://kitsu.io/api/edge/'

export const fetcher = url => axios.get(url).then(res => res.data)

export default {
  fetcher
}
