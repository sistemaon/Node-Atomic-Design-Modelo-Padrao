'use strict';

require('../../../config/db');
const Organism = require('./userOrganism');
const callback = require('./organelles/callback');
const query = {_id: '5707de5e0129897f105bfa9e'};

Organism.find(query, callback);
