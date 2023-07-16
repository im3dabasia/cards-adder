const express = require('express');
const router = express.Router();
const UserController = require("../Controllers/User")

router.get('/all',UserController.getAllUsers)

module.exports = router;
