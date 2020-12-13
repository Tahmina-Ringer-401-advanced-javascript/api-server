'use strict';

require('@code-fellows/supergoose');

const BabyAnimal = require('../models/babyAnimal-collection.js');
const babyAnimal = new BabyAnimal();

describe('Baby Animal Model', () => {
  it('can create() a new baby animals item', () => {
    let obj = { name: 'test baby animals 1', type: 'baby animal' };
    let expected = { name: 'test baby animals 1', type: 'BABY ANIMAL' };
    return babyAnimal.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(expected[key]);
        });
      });
  });

  it('can get() a baby animals item', () => {
    let obj = { name: 'test baby animals 2', type: 'dahlia' };
    let expected = { name: 'test baby animals 2', type: 'DAHLIA' };

    return babyAnimal.create(obj)
      .then(record => {
        return babyAnimal.get(record._id)
          .then(babyAnimalItem => {
            Object.keys(obj).forEach(key => {
              expect(babyAnimalItem[key]).toEqual(expected[key]);
            });
          });
      });
  });
});
