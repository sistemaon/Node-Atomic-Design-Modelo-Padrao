'use strict';

require('../../../config/db');
const Organism = require('./userOrganism');
const callback = require('./organelles/callback');
const obj = {
  email: 'suissera@webshool.io'
, password: 'BazOOkALok'
}

Organism.create(obj, callback);
