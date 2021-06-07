var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const {PORT, DB_URL} = require('./constants');
const routes = require('./views/routes') 


app.use('/', routes);


mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
        app.listen(PORT, () =>{
            console.log(`Running on port ${PORT}`)
        })

    }).catch(err => {
        console.log('error connecting to database')
    })
