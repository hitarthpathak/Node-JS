const mongoose = require('mongoose');

const order_schema = new mongoose.Schema({
    ordered_items: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: [true, 'Product ID Is Required!']
            },
            quantity: {
                type: Number,
                min: [1, 'Quantity Cannot Be Less Than 1'],
                required: true
            }
        }
    ],
    order_price: {
        type: Number,
        required: true
    },
    ordered_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    payment_id: {
        type: String,
        required: true
    },
    payment_status: {
        type: String,
        enum: ['Pending', 'Processing', 'Paid', 'Failed', 'Refunded'],
        default: 'Pending',
        required: true
    }
}, { timestamps: true });

module.exports = {
    Order: mongoose.model('Order', order_schema)
};