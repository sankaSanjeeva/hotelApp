var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {
        line1: {type: String, default: null},
        line2: {type: String, default: null},
        line3: {type: String, default: null},
        postCode: Number
    },
    type: {
        type: String,
        enum: ['Normal Hotel', 'Tourist Hotel', 'Guest Hotel', 'Restaurant', 'Boutique Villas', 'Heritage Home', 'Cottage', 'Resort Hotel', 'Casino Hotel'],
        default: 'Normal Hotel'
    },
    discription: String,
    facilities: [String],
    activitiesAndEntertainment: [String]
});

module.exports = mongoose.model('hotel', hotelSchema);