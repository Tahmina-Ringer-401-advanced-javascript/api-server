'use strict';

const express = require('express');
const BabyAnimalCollection = require('../models/babyAnimal-collection');
const BabyAnimal = require('../models/babyAnimals');
const animal = new BabyAnimalCollection(BabyAnimal);

const router = express.Router();

//RESTful routes
router.get('/animal', getAnimal);
router.get('/animal/:_id', getOneAnimal);
router.post('/animal', createAnimal);
router.put('/animal/:_id', updateAnimals);
router.delete('/animal/:_id', deleteAnimal);


async function getAnimal(req, res) {
  const allAnimals = await animal.get();
  res.status(200).json(allAnimals);
}

async function getOneAnimal(req, res) {
  const id = req.params._id;
  await animal.get(id);
  res.status(200).json(id);
}

async function createAnimal(req, res) {
  const newAnimal = await animal.create(req.body);
  res.status(200).json(newAnimal);
}

async function updateAnimals(req, res) {
  const id = req.params._id;
  const updateAnimal = await animal.update(id, req.body);
  res.status(200).json(updateAnimal);
}

async function deleteAnimal(req, res) {
  const id = req.params._id;
  await animal.delete(id);
  res.status(200).json('Deleteing baby animal');
}

module.exports = router;