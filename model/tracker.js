const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({

    amount: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    description: {
        type: String,
        required: true
    },
},
    { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema)