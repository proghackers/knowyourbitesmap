var GeoData = require('../models/geodata');
var express = require('express');

var router = express.Router();

// ==============================================================
router.route('/')
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
    })
    .get(function(req, res) {
        GeoData.find({}, function(err, geoDataArr) {
            if (err) {
                res.send(err);
            } else {
                res.json(geoDataArr);
            }
        });
    });

router.route('/:geodata_id')
    .get(function(req, res) {
        GeoData.findOne({ id: req.params.geodata_id }, function(err, geodata) {
            if (err) {
                res.send(err);
            } else {
                res.json(geodata);
            }
        });
    });

module.exports = router;