const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    user: String,
    feeling: String,
    availability: String,
    hobbies: Array,
    digits_on_number_scale: String,
})

module.exports = mongoose.model('DataModel', ModelSchema)

