const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const productSchema = Schema({
  name: { type: String, trim: true, required: true },
  desc: { type: String },
});

module.exports = model('product', productSchema);
