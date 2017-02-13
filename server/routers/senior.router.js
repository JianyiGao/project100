var express = require('express');
var router = express.Router();
var Senior = require("../models/senior.model.js");

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/seniors', function(req, res){
  Senior.find({}, function(err, foundSeniors){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      seniors: foundSeniors
    });
  });
});

router.get('/seniors/:position', function(req, res){
  Senior.find({ name: req.params.position }, function(err, foundMember){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      member: foundMember
    });
  });
});

router.post('/seniors', function(req, res){
  console.log(req.body);
  var senior = new Senior(req.body);
  senior.save(function(err){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: "Added to Project 100!"
    });
  });
});
router.put('/seniors/:id', function(req, res){
  Senior.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldSenior){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: oldSenior
    });
  });
});
router.delete('/seniors/:id', function(req, res){
  Senior.findOneAndRemove({_id: req.params.id}, function(err, deletedSenior){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: deletedSenior
    });
  });
});

module.exports = router;
