var mongoose = require('mongoose');

var geoItemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
});

var geoDataSchema = mongoose.Schema({
    id: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    geoitems: {
        type: [geoItemSchema]
    }
});

module.exports = mongoose.model('GeoData', geoDataSchema);