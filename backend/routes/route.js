const express = require('express');
const router = express.Router();

const User = require('../models/Users');

//Retriving
router.get('/User', async (req, res, next) => {
    const result = await User.find();
    console.log('Result', result);
    if (result.err) {
        res.json(result.err);
    }
    else {
        res.json(result);
    }

});

// Add
router.post("/User", async (req, res, next) => {
    console.log(req.body);

    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    });

    const result = await newUser.save();
    if (result.err) {
        res.json({ msg: "Fail" });
    } else {
        res.json({ msg: "Added" });
    }
});

//Delete
router.delete('/User/:id', async (req, res, next) => {
    const result = await User.remove({ _id: req.params.id })
    if (result.err) {
        res.json(result.err);
    }
    else {
        res.json(result.deleted);
    }
});
module.exports = router;