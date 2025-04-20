import env from 'dotenv'
import express, { Request, Response } from 'express'

env.config()

const { PORT } = process.env

export const startHttpServer = () => {
  const app = express()
  const currentPort = PORT || 3333

  app.get('/', (_: Request, res: Response) => {
    res.send('Kraken is watching...')
  })

  app.listen(currentPort, () => {
    console.log(`Fake HTTP server running on port ${currentPort}`)
  })
}
