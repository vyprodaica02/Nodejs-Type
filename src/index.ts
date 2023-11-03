import express from 'express'
const app = express()
const port = 3000
//cấu hình bodyparser
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
import { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('../dist/app/Router/HomeRouter')(app)
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('../dist/app/Router/BookRouter')(app)

app.listen(port, () => {
  console.log(` http://localhost:${port}`)
})
;``
