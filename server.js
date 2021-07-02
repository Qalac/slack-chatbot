var mongoose = require('mongoose');
var { App } = require('@slack/bolt');

const {PORT, DB_URL, BOT_TOKEN, SIGNING_SECRET} = require('./constants');
const {appEvent} = require('./controllers/event');
const {mention} = require('./controllers/mention');

const app = new App({
    token: BOT_TOKEN,
    signingSecret: SIGNING_SECRET
  });


app.command("/hi", appEvent) 

app.event('app_mention', mention)

(async () => {
    await app.start(PORT);
})();

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
    }).catch(err => {
        console.log('error connecting to database')
    })

