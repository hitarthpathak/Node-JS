const mongoose = require('mongoose');

const category_schema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = {
    Category: mongoose.model('Category', category_schema)
};