const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Curso = require('../../Curso/molecules/cursoSchemaMolecule');

const Molecule = {
  name: require('../../../atoms/name-atom')
, schoolName: require('../../../atoms/schoolName-atom')
, cursos: [ require('../../../atoms/cursoRef-atom') (Schema) ]
};

module.exports = new Schema(Molecule);
