import { Client } from 'discord.js'
import { config } from './config'
import { registerEvents } from './events/registerEvents'

const client = new Client({
  intents: config.intents
})

// config
client.login(config.token).catch(console.error)

client.once('ready', () => {
  console.log(`🐙 Rato Kraken is online as ${client.user?.tag}`)
})

// events
registerEvents(client)
