const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('I am an express server')
})

app.listen(7777, () => {
  console.log('I am listining on port 7777');
})
