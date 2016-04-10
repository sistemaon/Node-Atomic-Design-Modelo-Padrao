'use strict';

const mongoose = require('mongoose');
const Molecule = require('../../../modules/Aluno/molecules/alunoSchemaMolecule');
const Organism = mongoose.model('Alunos', Molecule);

const create = require('./organelles/create')(Organism);
const find = require('./organelles/find')(Organism);
const findOne = require('./organelles/findOne')(Organism);
const update = require('./organelles/update')(Organism);
const remove = require('./organelles/remove')(Organism);

const alunoCell = {
  create
, find
, findOne
, update
, remove
};

module.exports = alunoCell;
