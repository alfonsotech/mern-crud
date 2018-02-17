var express = require('express')
var app = express()
var PORT = process.env.PORT || 5000

app.use(express.static("client/build"));

app.get('/', function (req, res) {
  // res.json({'message': 'Hello WOrld2'})
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
})

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
})
