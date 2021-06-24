const modelInstance = require('../model/model');
const { SIGNING_SECRET, BOT_TOKEN, WEBHOOK } = require('../constants');
const slackbot = require('slackbots');

var channel = "chatbot-build"

var bot = new slackbot({
    token: BOT_TOKEN,
    name: "Anthony"
})

var getResponses = async(req, res, next) => {
    var responses = await modelInstance.find({}, 'feeling availability hobbies digits_on_number_scale')
    res.send(responses)
}

var slashResponse = async(req, res, next) => {
    res.send(
        {
            "response_type": "in_channel",
            "text": `Welcome @${req.body.user_name}. How are you doing?`,
        }
    );
}

var eventResponse = async(req, res, next) => {
    bot.on("start", () =>{
        bot.postMessageToChannel(channel, "Hello its working")
    });
}


module.exports = {
    getResponses: getResponses,
    slashResponse: slashResponse,
    eventResponse: eventResponse
}
