'use strict';

require('@code-fellows/supergoose');

const Flower = require('../models/flower-collection.js');
const flower = new Flower();

describe('Flower Model', () => {
  it('can create() a new flower item', () => {
    let obj = { name: 'test flower 1', type: 'flower' };
    let expected = { name: 'test flower 1', type: 'FLOWER' };
    return flower.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(expected[key]);
        });
      });
  });

  it('can get() a flower item', () => {
    let obj = { name: 'test flower 2', type: 'dahlia' };
    let expected = { name: 'test flower 2', type: 'DAHLIA' };

    return flower.create(obj)
      .then(record => {
        return flower.get(record._id)
          .then(flowerItem => {
            Object.keys(obj).forEach(key => {
              expect(flowerItem[key]).toEqual(expected[key]);
            });
          });
      });
  });
});
