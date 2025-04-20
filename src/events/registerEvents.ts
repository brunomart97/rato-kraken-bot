import { Client } from 'discord.js'
import { krakenSeaPunishment } from './voiceStateUpdate/krakenSeaPunishment'

export const registerEvents = (client: Client) => {
  client.on('voiceStateUpdate', async (oldState, newState) => {
    await krakenSeaPunishment.execute(oldState, newState)
  })
}
