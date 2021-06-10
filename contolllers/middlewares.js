const modelInstance = require('../model/model');

var getResponses = async(req, res, next) => {
    var responses = await modelInstance.find({}, 'feeling availability hobbies digits_on_number_scale')
    res.send(responses)
}

var slashResponse = async(req, res, next) => {
    res.send(
        {
            "response_type": "in_channel",
            "text": "It's 80 degrees right now."
        }
    );
}

module.exports = {
    getResponses: getResponses,
    slashResponse: slashResponse
}