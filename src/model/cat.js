'use strict';

const uuid4 = require('uuid/v4');
const logger = require('../lib/logger');

module.exports = class Cat {
  constructor(name, favoriteFood) {
    if (!name || !favoriteFood) throw new Error('POST request requires name and favorite food');
    this.id = uuid4();
    this.name = name;
    this.favoriteFood = favoriteFood;
    logger.log(logger.INFO, `CAT: created a new cat ${JSON.stringify(this)}`);
  }
};
