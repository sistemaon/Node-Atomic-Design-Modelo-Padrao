'use strict';

require('../../../config/db');
const Organism = require('./alunoOrganism');
const callback = require('./organelles/callback');
const query = {};

Organism.find(query, callback);
