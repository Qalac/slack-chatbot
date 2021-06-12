const modelInstance = require('../model/model');
const axios = require('axios');
// const {BOT_TOKEN} = require('../constants');


const BOT_TOKEN = xoxb-2142287031523-2150781824772-SmaNN61T5ixvoX9z4RRwVEI0
const WEBHOOK = "https://hooks.slack.com/services/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"


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


let headers = { Authorization: `Bearer ${BOT_TOKEN}` };
var eventResponse = async(req, res, next) => {
    axios.post(WEBHOOK, headers, {
        "channel": req.body.event.channel,
        "text": "Event acknowledged"
      })
    }


module.exports = {
    getResponses: getResponses,
    slashResponse: slashResponse,
    eventResponse: eventResponse
}
