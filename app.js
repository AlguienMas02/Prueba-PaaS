const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res)=>{
    req.setEncoding('Despliege paas 2025');
});

app.listen(port,()=>{
    console.log('Aplicacion escuchando en el puerto $(port)');


});








