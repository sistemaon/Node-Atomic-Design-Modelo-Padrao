const mongoose = require('mongoose');

const MoleculeName = 'Users';
const Molecule = require('../molecules/userSchemaMolecule');

const Organism = mongoose.model(MoleculeName, Molecule);

const DNA = {
  email: 'suiss@webschool.io'
, password: 'sdhu889h89d'
};

const Cell = new Organism(DNA);
console.log('Cell', Cell);
