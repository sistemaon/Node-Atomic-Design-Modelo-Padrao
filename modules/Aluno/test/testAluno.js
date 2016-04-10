require('../../../config/db');
const mongoose = require('mongoose');
const MoleculeName = 'Alunos';
const Molecule = require('../molecules/alunoSchemaMolecule');

const Organism = mongoose.model(MoleculeName, Molecule);

const DNA = {
  name: 'Suissa'
, dateBirth: new Date('1984/11/20')
, cursos: [ '57071ffe245b672b2a6b6b72' ]
};
const Cell = new Organism(DNA);
console.log('Cell', Cell);


//const Molecule = require('./molecules/'+MoleculeName.toLowerCase()+'Curso');

Cell.save((err, data) => {
  if(err) console.log('ERRO:', err);
  else console.log('RETORNO', data);
})
