const express = require('express');


const empresas = require('./empresas');
const usuarios = require('./usuarios');
//obejeto que devuelve expres al ser llamado
const app = express();

//Middleware express.json






//url base --> url base: http://localhost:3030/
//devolviendo empresa
app.get('/api/companies/new',(req, res) =>{
    return res.status(200).json(empresas);
});


//devolviendo usuarios
app.get('/api/users/new',(req, res) =>{
    return res.status(200).json(usuarios)
});

//devolviendo empresa y usuario
app.get('/api/user/company', (req, res) =>{
   
   return res.status(200).json({usuarios,empresas});
             
    
});


//encendiendo servidor
app.listen(3030,() =>{
    console.log("Servidor 3030 encendido, si señor");
});
