var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Assessment = require('../models/assessment');
var User = require('../models/user');

router.post('/', function (req, res, next) {
  var userID = req.query.token;
    User.findById(userID, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var assessment = new Assessment({
          //artikels: req.body.artikels,
          //artikelAssessment: req.body.artikelAssessment,
          user: user
        });
        assessment.save(function(err, result){
          if (err){
            return res.status(500).json({
                      title: 'An error occurred',
                      error: err
            });
          }
          res.status(201).json({
                message: 'Saved assessment',
                obj: result
            });
        }
    );
  });
});

module.exports = router;
