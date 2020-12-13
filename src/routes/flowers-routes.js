'use strict';

const express = require('express');
const FlowerCollection = require('../models/flower-collection');
const Flowers = require('../models/flowers');
const flower = new FlowerCollection(Flowers);

const router = express.Router();

//RESTful routes
router.get('/flower', getFlower);
router.get('/flower/:id', getOneFlower);
router.post('/flower', createFlower);
router.put('/flower/:id', updateFlowers);
router.delete('/flower/:id', deleteFlower);


async function getFlower(req, res) {
  const allFlowers = await flower.get();
  res.status(200).json(allFlowers);
}

async function getOneFlower(req, res) {
  const id = req.params.id;
  await flower.get(id);
  res.status(200).json(id);
}

async function createFlower(req, res) {
  const newFlower = await flower.create(req.body);
  res.status(200).json(newFlower);
}

async function updateFlowers(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const updateFlower = await flower.update(id, obj);
  res.status(200).json(updateFlower); 
}

async function deleteFlower(req, res) {
  const obj = req.params.id;
  await flower.delete(obj);
  res.status(200).json(obj);
}

module.exports = router;