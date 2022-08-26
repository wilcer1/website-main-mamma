const mongoose = require("mongoose");

const availableSchema = new mongoose.Schema({
    datetime: {
        type: String,
        min: 22,
        max: 22,
        required: true,
        unique: true
        }
    
});

module.exports = mongoose.model('availableSchema', availableSchema);  