const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env") });
const routes = require("./router")

const express = require('express');
const cors = require('cors');
const DB = require('./database/initDatabase');


const app = express();

const PORT =  process.env.PORT || process.env.BACKEND_PORT 

app.use(express.json());
app.use(cors());

app.use('/', routes); 

async function startServer(){
    try{
        // Test the connection to the database
        await DB.authenticate();
        console.log('Database connection has been established successfully.');
        
        // If the connection is successful, then start the server
        app.listen(PORT, () => console.log(`Backend is listening on port ${PORT}`)); 
    } catch(err){
        console.log('Unable to connect to the database:', err); 
    }
}

startServer()