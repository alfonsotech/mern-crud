var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var routes = require("./routes")
var app = express()
var PORT = process.env.PORT || 5000

//Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static("client/build"))
app.use(routes)


//Mongoose Connection
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/mern-crud")
// mongoose.connect("mongodb://127.0.0.1//mern-crud")
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to mongodb://localhost/mern-crud');
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT)
})
