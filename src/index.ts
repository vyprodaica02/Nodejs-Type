import express from 'express'
import { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.json('Tôi là Đức')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
