var mongoose = require('mongoose');
var { App } = require('@slack/bolt');

const {PORT, DB_URL, BOT_TOKEN, SIGNING_SECRET} = require('./constants');

const app = new App({
    token: BOT_TOKEN,
    signingSecret: SIGNING_SECRET
  });


app.command("/hello", async ({ command, ack, say }) => {
    try {
        await ack();
        say(` Welcome <@${command.channel_id}>. How are you doing?`);
    }
    catch(err) {
        console.log(err);
    }
});


channel_id = ""

// app.event('app_mention', async ({ event, client }) => {
//   try {

//     const result = await client.chat.postMessage({
//       channel: ,
//       text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`
//     });
//     console.log(result);
//   }
//   catch (error) {
//     console.error(error);
//   }
// });







(async () => {
    await app.start(PORT);
})();

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
    }).catch(err => {
        console.log('error connecting to database')
    })

