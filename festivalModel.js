// festivalModel.js

var mongoose = require('mongoose');

//Setup Schema
var festivalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Export Festival Model
var Festival = module.exports = mongoose.model('festival',festivalSchema);

module.exports.get = function (callback, limit) {
    Festival.find(callback).limit(limit);
}