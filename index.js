const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGODB;

mongoose.connect(URI , {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
});

let db = mongoose.connection;

db.once('open',()=>{
    console.log('Connected to db');
});

db.on('error',(err)=>{
    console.log(err);
})

app.use(express.json());


app.use('/',require('./api/routes/main'));

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`Working Fine on ${port}`);
})