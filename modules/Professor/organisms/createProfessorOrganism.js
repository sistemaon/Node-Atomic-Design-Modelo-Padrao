'use strict';

require('../../../config/db');
const Organism = require('./professorOrganism');
const callback = require('./organelles/callback');
const obj = {
  name: 'Aux. Suissa'
, schoolName: 'io.WebSchool'
, cursos: ['5709762d11e704201e70ab87']
}

Organism.create(obj, callback);
