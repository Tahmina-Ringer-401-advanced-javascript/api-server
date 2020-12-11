'use strict';

const express = require('express');
// const { model } = require('../models/flowers');
const DataCollection = require('../models/data-collection-class');
const Flowers = require('../models/flowers');
const flower = new DataCollection(Flowers);

const router = express.Router();

//RESTful routes
router.get('/flower', getFlower);
router.get('/flower/:id', getOneFlower);
router.post('/flower', createFlower);
router.put('/flower/:id', updateFlower);
router.delete('/flower/:id', deleteFlower);


function getFlower(req, res) {
  const allFlowers = flower.get();
  res.status(200).json(allFlowers);
}

function getOneFlower(req, res) {
  const id = req.params.id;
  flower.get(id)
    .then(result => {
      res.status(200).json(result);
    });
}

function createFlower(req, res) {
  const obj = req.body;
  flower.create(obj)
    .then(result => {
      res.status(200).json(result);
    });
}

function updateFlower(req, res) {
  const obj = req.params.id;
  flower.update(obj, req.body);
  flower.put(obj)
    .then(result => {
      res.status(200).json(result);
    });
}

function deleteFlower(req, res) {
  const obj = req.params.id;
  flower.delete(obj);
  flower.delete(obj)
    .then(result => {
      res.status(200).json(result);
    });
}
module.exports = router;