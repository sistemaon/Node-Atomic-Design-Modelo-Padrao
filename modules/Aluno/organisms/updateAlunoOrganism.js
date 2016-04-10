'use strict';

require('../../../config/db');
const Organism = require('./alunoOrganism');
const callback = require('./organelles/callback');
const query = { _id: '570815759312e5fe1f8609d4' };
const mod = {name: 'Suissera'}
const options = {};

Organism.update(query, mod, options, callback);
