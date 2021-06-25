var mongoose = require('mongoose');
var { App } = require('@slack/bolt');

const {PORT, DB_URL, BOT_TOKEN, SIGNING_SECRET} = require('./constants');

const app = new App({
    token: BOT_TOKEN,
    signingSecret: SIGNING_SECRET
  });


app.message(/^(hi|hello|hey).*/, async ({ context, say }) => {
    const greeting = context.matches[0];
    await say(`${greeting}, how are you?`);
});

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Database connected successfully')
    }).catch(err => {
        console.log('error connecting to database')
    })


(async () => {
    await app.start(PORT);
    console.log('⚡️ Bolt app is running!');
})();



// var slashResponse = async(req, res, next) => {
//     res.send(
//         {
//             "response_type": "in_channel",
//             "text": `Welcome <@${req.body.user_name}>. How are you doing?`,
//         }
//     );
// }