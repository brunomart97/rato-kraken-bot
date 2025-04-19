import env from 'dotenv'
import { GatewayIntentBits } from 'discord.js'

env.config()

const { DISCORD_APP_TOKEN } = process.env

export const config = {
  token: DISCORD_APP_TOKEN,
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers
  ]
}
