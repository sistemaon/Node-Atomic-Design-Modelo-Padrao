'use strict';

const mongoose = require('mongoose');
const Molecule = require('../../../modules/Curso/molecules/cursoSchemaMolecule');
const Organism = mongoose.model('Cursos', Molecule);

const create = require('./organelles/create')(Organism);
const find = require('./organelles/find')(Organism);
const findOne = require('./organelles/findOne')(Organism);
const update = require('./organelles/update')(Organism);
const remove = require('./organelles/remove')(Organism);

const cursoCell = {
  create
, find
, findOne
, update
, remove
};

module.exports = cursoCell;
