'use strict';

require('../../../config/db');
const Organism = require('./userOrganism');
const callback = require('./organelles/callback');
const query = {_id: '57097786ddbe9e5f1e32aa64'};

Organism.findOne(query, callback);
