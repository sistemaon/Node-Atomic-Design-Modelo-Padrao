'use strict';

require('../../../config/db');
const Organism = require('./professorOrganism');
const callback = require('./organelles/callback');
const query = { _id: '57081de71caa9d161061915b' };

Organism.findOne(query, callback);
