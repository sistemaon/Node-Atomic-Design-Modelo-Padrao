const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
  name: require('../../../atoms/name-atom')
, dateBegin: require('../../../atoms/dateBegin-atom')
, link: require('../../../atoms/link-atom')
}

module.exports = new Schema(Molecule);
