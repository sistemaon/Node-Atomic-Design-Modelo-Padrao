'use strict';

require('../../../config/db');
const Organism = require('./cursoOrganism');
const callback = require('./organelles/callbackRemove');
const query = { _id: '57071ffe245b672b2a6b6b72' };


Organism.remove(query, callback);
