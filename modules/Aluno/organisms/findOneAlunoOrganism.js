'use strict';

require('../../../config/db');
const Organism = require('./alunoOrganism');
const callback = require('./organelles/callback');
const query = { _id: '5709795aeabbc1bb1ea0c347' };

Organism.findOne(query, callback);
