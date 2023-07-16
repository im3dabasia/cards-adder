const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  positionType: String

});

module.exports = mongoose.model('Position', positionSchema);