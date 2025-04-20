import { Client, ActivityType } from 'discord.js'

type StatusOption = {
  text: string
  type: ActivityType
}

const statuses: StatusOption[] = [
  { text: 'rumores de ratos nos porões', type: ActivityType.Listening },
  { text: 'o mar em busca de presas', type: ActivityType.Watching },
  { text: 'o Jogo da Caçada Sombria', type: ActivityType.Playing },
  { text: 'sussurros do oceano profundo', type: ActivityType.Listening },
  { text: 'as movimentações no convés', type: ActivityType.Watching },
  { text: 'a Dominação dos Sete Mares', type: ActivityType.Competing },
  { text: 'rastros deixados pelos ratos', type: ActivityType.Watching },
  { text: 'pela supremacia dos mares', type: ActivityType.Competing }
]

export const setStatus = (client: Client) => {
  const updateStatus = () => {
    const random = statuses[Math.floor(Math.random() * statuses.length)]
    client.user?.setActivity(random.text, { type: random.type })
  }

  updateStatus()
  setInterval(updateStatus, 5 * 60 * 1000)
}
