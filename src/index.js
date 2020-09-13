const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); //parametros via url
app.use(cors());
app.get('/', (req, res) => {
    res.send("OK");
})

require('./app/controllers/index')(app); //importa controllers

const LOCAL_PORT = 4000;

app.listen(LOCAL_PORT, ()=> {
    console.log(`Server is running on port ${LOCAL_PORT}`);
});