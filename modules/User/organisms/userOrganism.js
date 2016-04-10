'use strict';

const mongoose = require('mongoose');
const Molecule = require('../../../modules/User/molecules/userSchemaMolecule');
const Organism = mongoose.model('Users', Molecule);

const create = require('./organelles/create')(Organism);
const find = require('./organelles/find')(Organism);
const findOne = require('./organelles/findOne')(Organism);
const update = require('./organelles/update')(Organism);
const remove = require('./organelles/remove')(Organism);

const userCell = {
  create
, find
, findOne
, update
, remove
};

module.exports = userCell;
