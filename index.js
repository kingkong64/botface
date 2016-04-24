var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Word')
})

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), function () {
  console.log('Server Start at port ', app.get('port'))
})
