const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    startDate: Date,
    position: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position',
    },
});

module.exports = mongoose.model('User', userSchema);