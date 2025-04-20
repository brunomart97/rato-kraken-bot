import express, { Request, Response } from 'express'

export const startHttpServer = () => {
  const app = express()
  const PORT = process.env.PORT || 3000

  app.get('/', (_: Request, res: Response) => {
    res.send('Kraken is watching...')
  })

  app.listen(PORT, () => {
    console.log(`Fake HTTP server running on port ${PORT}`)
  })
}
