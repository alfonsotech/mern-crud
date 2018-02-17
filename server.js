var express = require('express')
var app = express()
var PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.json({'message': 'Hello WOrld2'})
})

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
})
