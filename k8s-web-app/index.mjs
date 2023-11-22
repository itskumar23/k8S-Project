import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  const msg = `Message from Host:  ${os.hostname()}`
  console.log(msg)
  res.send(msg)
})

app.listen(PORT, () => {
  console.log(`Web server listening at port  number : ${PORT}`)
})