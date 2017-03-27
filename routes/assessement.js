var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/assessment');

router.post('/', function (req, res, next) {
    var assessment = new Assessment({
        artikels: req.body.artikels,
        artikelAssessment: req.body.artikelAssessment,
        userId: req.body.userId,
    });
    assessment.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'assessment created',
            obj: result
        });
    });
});

module.exports = router;
