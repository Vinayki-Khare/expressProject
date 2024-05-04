var express = require('express')
var path = require('path')
var app = express()

const staticPath = path.join(__dirname, '../public');

app.set("view engine","hbs");

app.get('/', function (req, res) {
  res.render()
});

// app.use(express.static(staticPath))


app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/about', function (req, res) {
    res.send('Hello World from about page')
  });

app.listen(3000, () => {
    console.log("listening")
})