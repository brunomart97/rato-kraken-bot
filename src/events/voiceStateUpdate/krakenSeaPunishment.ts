import env from 'dotenv'
import { Events, VoiceState } from 'discord.js'

env.config()

const { KRAKEN_SEA_SERVER_ID, ROLE_ID_KRAKEN_FOOD } = process.env

export const krakenSeaPunishment = {
  name: Events.VoiceStateUpdate,
  once: false,
  execute: async (oldState: VoiceState, newState: VoiceState) => {
    const member = newState.member

    if (!member) {
      return
    }

    const oldChannelId = oldState.channelId
    const newChannelId = newState.channelId

    if (oldChannelId === newChannelId) {
      return
    }

    if (newChannelId === KRAKEN_SEA_SERVER_ID) {
      try {
        await member.roles.add(ROLE_ID_KRAKEN_FOOD as string)

        const interval = setInterval(() => {
          if (member.voice.channelId !== KRAKEN_SEA_SERVER_ID) {
            member.voice.setChannel(KRAKEN_SEA_SERVER_ID).catch(console.error)
          }
        }, 1000)

        setTimeout(async () => {
          clearInterval(interval)
          await member.roles.remove(ROLE_ID_KRAKEN_FOOD as string)
        }, 60_000)
      } catch (error) {
        console.error('Kraken Sea Punishment error:', error)
      }
    }
  }
}
