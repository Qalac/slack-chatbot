var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const {PORT, DB_URL} = require('./constants');
const routes = require('./views/routes') 

const modelInstance = require('./model/model');

const dummy = new modelInstance({
    user: 'sample user',
    availability: 'available',
    hobbies: 'eating',
    digits_on_number_scale: '999',
    feeling: 'sensational'
})

app.use('/', routes);


mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
        dummy.save()
        app.listen(PORT, () =>{
            console.log(`Running on port ${PORT}`)
        })

    }).catch(err => {
        console.log('error connecting to database')
    })
