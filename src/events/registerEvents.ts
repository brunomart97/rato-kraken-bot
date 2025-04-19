import { Client } from 'discord.js'
import { krakenSeaPunishment } from './voiceStateUpdate/krakenSeaPunishment'

export const registerEvents = (client: Client) => {
  client.on('voiceStateUpdate', (oldState, newState) => {
    krakenSeaPunishment.execute(oldState, newState)
  })
}
