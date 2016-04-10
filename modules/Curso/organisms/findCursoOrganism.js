'use strict';

require('../../../config/db');
const Organism = require('./cursoOrganism');
const callback = require('./organelles/callback');
const query = {};

Organism.find(query, callback);
