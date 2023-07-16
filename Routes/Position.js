const express = require('express');
const router = express.Router();
const Position = require('../Models/Position');


router.get('/', async (req, res) => {
  try {
    // console.log("sending user positions")
    const position = await Position.find();
    res.json(position);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
router.post('/', async (req, res) => {
  try {
    const position = await Position.create(req.body);
    res.json({
      Message: "Position Added Successfully",
      Position:position
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

