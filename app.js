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

//Faccio rimanere il server in ascolto
app.listen(port,()=>{
    console.log(`Il server è in ascolto sulla porta ${port}`)
})