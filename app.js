const express = require('express');
const bodyParser = require('body-parser');
const fortunes = require('./data/fortunes.json');
const port = 3000; 

const app = express();

app.use(bodyParser.json());

app.get( '/fortunes' , (req , res) => {
res.json(fortunes);
});

app.get('/fortunes/random' , (req , res) => {
console.log('requesting random fortune');

const random_number = Math.floor(Math.random() * fortunes.length);

const rando_fortune = fortunes[random_number];

res.json(rando_fortune);
});

app.get('/fortunes/:id' , (req, res) => {
res.json(fortunes.find( fortune => fortune.id == req.params.id));

})

app.post('/fortunes' , (req , res) =>{
console.log(req.body);
});

module.exports = app;
