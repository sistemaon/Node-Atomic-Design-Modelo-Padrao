const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Curso = require('../../Curso/molecules/cursoSchemaMolecule');

const Molecule = {
  user_id: require('../../../atoms/userRef-atom')(Schema)
, name: require('../../../atoms/name-atom')
, dateBirth: require('../../../atoms/dateBirth-atom')
, cursos: [ require('../../../atoms/cursoRef-atom')(Schema) ]
};

module.exports = new Schema(Molecule)
