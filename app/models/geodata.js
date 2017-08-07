var mongoose = require('mongoose');

var geoItemSchema = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }
};

var geoDataSchema = new mongoose.Schema({
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