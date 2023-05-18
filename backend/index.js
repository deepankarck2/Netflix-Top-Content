const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env") });
const routes = require("./router")

const express = require('express');
const cors = require('cors');


const app = express();

const PORT = process.env.BACKEND_PORT 

app.use(express.json());
app.use(cors());

app.use('/', routes); 

async function startServer(){
    try{
    app.listen(PORT, () => console.log(`Backend is listening on port ${PORT}`)); 
    } catch(err){
        console.log(err); 
    }
}

startServer()