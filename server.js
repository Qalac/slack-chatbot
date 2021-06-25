var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var server = express();

const {PORT, DB_URL, BOT_TOKEN, SIGNING_SECRET} = require('./constants');
const routes = require('./views/routes') 

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use('/', routes);

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
    }).catch(err => {
        console.log('error connecting to database')
    })

server.listen(PORT);
