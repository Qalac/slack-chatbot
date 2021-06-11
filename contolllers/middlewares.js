const modelInstance = require('../model/model');

var getResponses = async(req, res, next) => {
    var responses = await modelInstance.find({}, 'feeling availability hobbies digits_on_number_scale')
    res.send(responses)
}

var slashResponse = async(req, res, next) => {
    res.send(
        {
            "response_type": "in_channel",
            "text": `Welcome ${req.body.user_name}. How are you doing?`,
        }
    );
}














// var dialogueResponse = async(req, res, next) => {

// }


module.exports = {
    getResponses: getResponses,
    slashResponse: slashResponse
}
