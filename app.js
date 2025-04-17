//Importo express
const express = require('express');

//Inizializzo express
const app = express();

//Definisco la porta
const port = 3000;

//Definisco la rotta
app.get('/', (req,res) =>{
    res.send('Mainpage')

})