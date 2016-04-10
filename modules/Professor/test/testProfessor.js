const mongoose = require('mongoose');
const MoleculeName = 'Professores';
const Molecule = require('../molecules/professorSchemaMolecule');

const Organism = mongoose.model(MoleculeName, Molecule);

const DNA = {
  name: 'Suissa'
, schoolName: 'WebSchool-io'
, cursos: [
    {
      name: 'Be MEAN'
    , dateBegin: new Date('2016/06/20')
    , link: 'https://github.com/Webschool-io/be-mean-instagram'
    }
  ]
};

const Cell = new Organism(DNA);
console.log('Cell', Cell);
