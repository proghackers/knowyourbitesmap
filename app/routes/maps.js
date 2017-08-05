var express = require('express');
var router = express.Router();
var GeoData = require('../models/geodata');

// ==============================================================
router.route('/:maps_id')
    .get(function(req, res) {
        GeoData.findOne({ id: req.params.maps_id }, function(err, geodata) {
            if (err) {
                res.send(err);
            } else {
                res.render('maps', {
                    geoData: JSON.stringify(geodata.geoitems)
                });
                //res.json(geodata);
            }
        });
    });

module.exports = router;