const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const productSchema = Schema({
  name: { type: String, trim: true, required: true },
  desc: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin',
    required: true,
  },
});

module.exports = model('product', productSchema);
