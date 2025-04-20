import { axiosInstance } from '../services/axiosInstance'

const SELF_URL = 'https://rato-kraken-bot.onrender.com/'

export const autoPing = () => {
  setInterval(async () => {
    try {
      await axiosInstance.get(SELF_URL)
      console.log('Keeping the Rato Kraken alive')
    } catch (err: any) {
      console.error('The Rato Kraken is dead', err.message)
    }
  }, 1000 * 60 * 13)
}
