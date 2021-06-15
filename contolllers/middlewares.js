const modelInstance = require('../model/model');
const { App } = require('@slack/bolt');
const { SIGNING_SECRET, BOT_TOKEN } = require('../constants');


const app = new App({
    token: BOT_TOKEN,
    signingSecret: SIGNING_SECRET
});


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

var eventResponse = (req, res, next) => {
    app.message("Hello", async({ command, say}) => {
        try {
            say("Welcome. How areyou doing?");
    
        }
        catch(error) {
            console.log("err")
        }
    })
}


module.exports = {
    getResponses: getResponses,
    slashResponse: slashResponse,
    eventResponse: eventResponse
}
