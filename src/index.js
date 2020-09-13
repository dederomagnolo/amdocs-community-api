const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); //parametros via url

app.get('/', (req, res) => {
    res.send("OK");
})

require('./app/controllers/index')(app); //importa controllers

app.listen(3000);