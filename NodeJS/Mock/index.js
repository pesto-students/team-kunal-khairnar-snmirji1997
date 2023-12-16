const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
const blogRouter = require('./routes/routes')


const app = express();

mongoose.connect('mongodb://localhost:27017/appdb')

app.use('/blog',blogRouter)

app.get()









app.listen(3002,()=>{
    console.log("server is running");
})