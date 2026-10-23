const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, 'Full Name Is Required!']
    },
    email: {
        type: String,
        required: [true, 'E-Mail Is Required!'],
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, 'Phone Number Is Required!'],
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others']
    },
    city: String,
    state: String,
    country: String,
}, { timestamps: true });

module.exports = {
    User: mongoose.model('User', user_schema)
};