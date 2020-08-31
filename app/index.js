const express = require('express')
const app = express()
const port = 3333
app.set('port', port)

app.get('/', (req, res) => {
  res.json({state: 'OK'})
  res.end()
})

app.get('/meta', require('./meta/index'))

app.listen(app.get('port'), () => {
  console.log({serve: `http://localhost:${port}`})
})
