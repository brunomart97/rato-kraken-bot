import { Client } from 'discord.js'
import { config } from './config'
import { registerEvents } from './events/registerEvents'
import { setStatus } from './status/setStatus'

const client = new Client({
  intents: config.intents
})

// config
client.login(config.token).catch(console.error)

client.once('ready', () => {
  console.log(`🐙 Rato Kraken is online as ${client.user?.tag}`)

  // status
  setStatus(client)
})

// events
registerEvents(client)
