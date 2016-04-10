'use strict';

require('../../../config/db');
const Organism = require('./alunoOrganism');
const callback = require('./organelles/callback');
const obj = {
  user_id: '57097786ddbe9e5f1e32aa64'
, name: 'Aluno.Suissa'
, dateBirth: new Date('1984/11/20')
, cursos: ['5709762d11e704201e70ab87']
}

Organism.create(obj, callback);
