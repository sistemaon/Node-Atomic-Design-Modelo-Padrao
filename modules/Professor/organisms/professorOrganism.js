'use strict';

const mongoose = require('mongoose');
const Molecule = require('../../../modules/Professor/molecules/professorSchemaMolecule');
const Organism = mongoose.model('Professores', Molecule);

const create = require('./organelles/create')(Organism);
const find = require('./organelles/find')(Organism);
const findOne = require('./organelles/findOne')(Organism);
const update = require('./organelles/update')(Organism);
const remove = require('./organelles/remove')(Organism);

const professorCell = {
  create
, find
, findOne
, update
, remove
};

module.exports = professorCell;
