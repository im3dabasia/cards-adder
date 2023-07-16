const express = require('express');
const router = express.Router();
const PositionController = require("../Controllers/Position")

router.get('/', PositionController.getAllPositions);
router.post('/', PositionController.postPosition);

module.exports = router;
