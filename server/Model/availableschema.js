const mongoose = require("mongoose");

const bookingsAvailableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255 
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('bookingsAvailable', bookingsAvailableSchema);  