const modelInstance = require('../model/model');
const axios = require('axios');

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

let url = "https://hooks.slack.com/services/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"

var eventResponse = async(req, res, next) => {
    axios.post(url, {
        "text": "Event acknowledged"
    })
}

module.exports = {
    getResponses: getResponses,
    slashResponse: slashResponse,
    eventResponse: eventResponse
}
