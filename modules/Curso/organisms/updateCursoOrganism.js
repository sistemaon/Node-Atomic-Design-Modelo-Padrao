'use strict';

require('../../../config/db');
const Organism = require('./cursoOrganism');
const callback = require('./organelles/callback');
const query = { _id: '5707ee87545337fe13896f21' };
const mod = {name: 'Be MEAN Funcional'}
const options = {};

Organism.update(query, mod, options, callback);
