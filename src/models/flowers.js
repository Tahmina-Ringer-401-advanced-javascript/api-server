'use strict';

const mongoose = require('mongoose');

// 1. make a schema
const flowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, uppercase: true, enum: ['DAHLIA', 'ANEMONIE', 'ASTILBE', 'TULIP', 'RANUNCULUS']},
});

// 2. export this schema as a model
const flowerModel = mongoose.model('flower', flowerSchema);

module.exports = flowerModel;
