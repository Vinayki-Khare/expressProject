const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.write("<h1>welcome to my home page</h1>");
    res.send();
});

app.get('/about', function (req, res) {
    res.send('Hello World from about page');
});

app.get('/contact', function (req, res) {
    res.send([{
        id: 1,
        name:"vinayki"
    },
    {
        id: 2,
        name:"vinayki"
    }]);
});

app.get('/temp', function (req, res) {
    res.send('Hello World from temp page');
});

app.listen(port, () => {
    console.log(`listening`);
})