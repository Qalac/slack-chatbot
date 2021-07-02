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
        say({
            blocks: [{
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "Pick a date for me to remind you"
                },
                "accessory": {
                  "type": "datepicker",
                  "action_id": "datepicker_remind",
                  "initial_date": "2019-04-28",
                  "placeholder": {
                    "type": "plain_text",
                    "text": "Select a date"
                  }
                }
              }]
        })
        // say(`Welcome <@${command.user_name}>. How are you doing? \n ${EmotionPicker}`);
    }
    catch(err) {
        console.log(err);
    }
});


var channel_id = "C024623HDH8"

app.event('app_mention', async ({ event, client }) => {
  try {
    const result = await client.chat.postMessage({
      channel: channel_id,
      text: `Welcome <@${event.user}>. 🎉 How are you doing?`
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});



(async () => {
    await app.start(PORT);
})();

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
    }).catch(err => {
        console.log('error connecting to database')
    })

