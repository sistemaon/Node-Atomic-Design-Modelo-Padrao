'use strict';

require('../../../config/db');
const Organism = require('./userOrganism');
const callback = require('./organelles/callbackRemove');
//const query = { _id: '5707e326eddb5e3c11d7520b'};
const query = {};

Organism.remove(query, callback);
