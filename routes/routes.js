const express = require('express');
const router = express.Router();

const Registration = require('../models/registrations');

router.get('/registrations', (req, res, next) => {
    Registration.find(function(err,registrations){
        if (err) {
            res.json(err);
          }else {
            res.json(registrations);
          }
        
    });
});

router.post("/registration", async (req, res, next) => {
    console.log(req.body);
    let newRegistration = new Registration({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      pwd: req.body.pwd,
      cpwd: req.body.pwd,
    });
  
    const dbres = await newRegistration.save();
    if (dbres.err) {
      res.json({ msg: "Fail" });
    } else {
      res.json({ msg: "Added" });
    }
  });

router.delete('/registration/:id', (req, res, next) => {
    Registration.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;