var GeoData = require('../models/geodata');
var express = require('express');

var router = express.Router();

// ==============================================================
router.route('/')

// create a new club
.post(function(req, res) {
    var newGeoData = new GeoData(req.body);

    newGeoData.save(function(err, club) {
        if (err) {
            console.log("Error occured" + err);
            res.send(err);
        } else {
            console.log("New club created " + club);
            res.json(club);
        }
    });
});



module.exports = router;