const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: function(){return this.booked},
        min: 0,
        max: 255 
    },
    email: {
        type: String,
        required: function(){return this.booked},
        max: 255,
        min: 6
    },
    datetime: {
        type: String,
        min: 22,
        max: 22,
        required: true,
        unique: true
    },
    booked: {
        type: Boolean,
        default: false
    } 
    
});

module.exports = mongoose.model('bookings', bookingSchema);  