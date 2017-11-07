var express = require('express');
var router = express.Router();
var Student = require("../models/student.model.js");

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/students', function(req, res){
  Student.find({}, function(err, foundStudents){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      students: foundStudents
    });
  });
});


router.get('/students/:position', function(req, res){
  Student.find({ name: req.params.position }, function(err, foundMember){
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

router.post('/students', function(req, res){
  console.log(req.body);
  var student = new Student(req.body);
  student.save(function(err){
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
router.put('/students/:id', function(req, res){
  Student.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldStudent){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: oldStudent
    });
  });
});
router.delete('/students/:id', function(req, res){
  Student.findOneAndRemove({_id: req.params.id}, function(err, deletedStudent){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: deletedStudent
    });
  });
});

module.exports = router;
