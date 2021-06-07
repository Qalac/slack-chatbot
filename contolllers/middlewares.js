const modelInstance = require('../model/model');

var getResponses = async (req, res, next) => {
    var responses = await modelInstance.find({}, 'feeling availability hobbies digits_on_number_scale')
    res.send(responses)
}


var postResponses = async (req, res, next) => {
    const data = {
        status: "working"
    }
    res.send(data)
}


module.exports = {
    getResponses: getResponses
}
