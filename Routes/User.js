const express = require('express');
const router = express.Router();
const UserController = require("../Controllers/User")

router.get('/all',UserController.getAllUsers)
router.post('/',UserController.postNewUser)
router.delete('/:id',UserController.removeUser)


module.exports = router;
