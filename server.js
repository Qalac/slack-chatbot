var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var server = express();

const { App } = require('@slack/bolt');
const {PORT, DB_URL, BOT_TOKEN, SIGNING_SECRET} = require('./constants');
const routes = require('./views/routes') 

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use('/', routes);

const app = new App({
    token: BOT_TOKEN,
    signingSecret: SIGNING_SECRET
  });


app.message(/^(hi|hello|hey).*/, async ({ message, say }) => {
    await say(`Hello, <@${message.user}>`);
});


(async () => {
    await app.start(PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();


mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
    }).catch(err => {
        console.log('error connecting to database')
    })
