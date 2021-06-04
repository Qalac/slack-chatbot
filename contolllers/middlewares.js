const modelInstance = require('../model/model');

var getResponses = async (req, res, next) => {
    var responses = await modelInstance.find({}, 'user feeling availability hobbies digits_on_number_scale')
    res.send(responses)
}


module.exports = {
    getResponses: getResponses
}
