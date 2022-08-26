const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
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
    datetime: {
        type: String,
        min: 22,
        max: 22,
        required: true,
        unique: true
    }
    
});

module.exports = mongoose.model('bookings', bookingSchema);  