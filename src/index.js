var express = require('express')
var path = require('path')
var app = express()
const hbs = require("hbs")

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../template');
const partialsPath = path.join(__dirname, '../partials');



app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials()

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