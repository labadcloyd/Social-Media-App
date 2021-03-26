const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
require('dotenv').config({path:'./config.env'})
const connectDB=require('./utilsServer/connectDB')
connectDB();

app.prepare().then(() => {
  const server = express()

  server.use("/api/signup", require("./api/signup"));
  server.use("/api/auth", require("./api/auth"));

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
