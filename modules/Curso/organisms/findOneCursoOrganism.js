'use strict';

require('../../../config/db');
const Organism = require('./cursoOrganism');
const callback = require('./organelles/callback');
const query = { _id: '5707ef003010ff10143cdd86' };

Organism.findOne(query, callback);
