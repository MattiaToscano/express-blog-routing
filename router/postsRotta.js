//Importo express
const express =require('express');

//Definisco il router
const router = express.Router();

//Riprendo l'array
const post = require('../posts')

//index
router.get('/:id', (req,res)=> {
    res.send('Lista dei posts')
});

//Show