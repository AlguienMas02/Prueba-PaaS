const express = require("express");
const {CosmosClient} = require("@azure/cosmos");
const app = express();
const port = process.env.port || 3000;

//Confid de cosmos
const cosmosCliente=new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
const database = cosmosCliente.database('academic-db');
const container= database.container('student');
app.use(express.json());

//Ruta para insertar datos
app.post('/student', async(req,res)=>(
   try{
        const{body}=req;
        const{resource:createdItem}=await container.item.create(body);
        res.status(201).send(createItem);
       
   }catch(error){
    res.status(500).send(error);            
}
));

//ruta para obtener datos
app.get('/students', (req, res)=>{
    try{
        const {resources}= await container.item.readAll().fetchAll();
        res.status(200).send(resource);
    } catch (error){
        res.status(500).send(error)
    }
});

app.listen(port,()=>{
    console.log('Aplicacion escuchando en el puerto $(port)');


});








