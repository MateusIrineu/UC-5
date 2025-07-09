// importação
const express = require('express')
// nome da minha aplicação server
const app = express()
// porta
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World,!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
