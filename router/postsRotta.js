//Importo express
const express =require('express');

//Definisco il router
const router = express.Router();

//Riprendo l'array
const post = require('../posts')

//index
router.get('/', (req,res)=> {
    res.send('Lista dei posts')
});

//Show
router.get('/:id', (req,res)=>{
    res.send(`Dettagli post, ${req.params.id}`);
});

//Store
router.post('/', (req,res)=>{
    res.send(`Inserimento post`);
});

//Update
router.post('/:id', (req,res)=>{
    res.send(`Modifica totale del post, ${req.params.id}`);
});

//Modify
router.post('/:id',(req,res)=>{
    res.send(`Modifica parziale del post, ${req.params.id}`);
});

//Destroy
router.post('/:id', (req,res)=>{
    res.send(`Eliminazione del post, ${req.params.id}`);
});





