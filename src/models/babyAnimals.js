'use strict';

const mongoose = require('mongoose');

const babyAnimalSchema = mongoose.Schema({
  name: { type: String, require: true },
  type: { type: String, require: true, enum: ['PIGLET, KITTEN, PUPPY, CHICK, JOEY, CUB']},
});

const babyAnimalModel = mongoose.model('baby animal', babyAnimalSchema);

module.exports = babyAnimalModel;
