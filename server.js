var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const {PORT, DB_URL, BOT_TOKEN} = require('./constants');
const routes = require('./views/routes') 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
    }).catch(err => {
        console.log('error connecting to database')
    })


app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`)
})
