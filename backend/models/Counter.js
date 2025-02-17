const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    model: { type: String, required: true },
    count: { type: Number, required: true },
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
