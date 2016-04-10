'use strict';

require('../../../config/db');
const Organism = require('./professorOrganism');
const callback = require('./organelles/callback');
const query = { _id: '57081de71caa9d161061915b' };
const mod = {schoolName: 'School of Web'};
const options = {};

Organism.update(query, mod, options, callback);
