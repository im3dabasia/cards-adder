const express = require('express');
const router = express.Router();
const User = require('../Models/User');

router.get('/all', async (req, res) => {
    // console.log("new sending users")
    const allusers = await User.find({}).populate("position");
    res.json(obj)

})

module.exports = router;
