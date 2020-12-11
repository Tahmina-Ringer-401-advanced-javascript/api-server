// 'use strict';

// const express = require('express');
// const BabyAnimal = require('../models/babyAnimals');
// const animal = new BabyAnimal();

// const router = express.Router();

// //RESTful routes
// router.get('/animal', getAnimal);
// router.get('/animal/:id', getOneAnimal);
// router.post('/animal', createAnimal);
// router.put('/animal/:id', updateAnimal);
// router.delete('/animal/:id', deleteAnimal);


// function getAnimal(req, res) {
//   const allAnimals = animal.get();
//   res.status(200).json(allAnimals);
// }

// function getOneAnimal(req, res) {
//   const id = req.params.id;
//   const oneAnimal = animal.get(id);
//   res.status(200).json(oneAnimal);
// }

// function createAnimal(req, res) {
//   const obj = req.body;
//   const newAnimal = animal.create(obj);
//   res.status(200).json(newAnimal);
// }

// function updateAnimal(req, res) {
//   const obj = req.body;
//   const id = req.params.id;
//   const updateAnimal = animal.update(id, obj);
//   res.status(200).json(updateAnimal);
// }

// function deleteAnimal(req, res) {
//   res.status(200).json('deleting baby animal');
// }

// module.exports = router;