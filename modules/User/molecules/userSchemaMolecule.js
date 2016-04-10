const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
  //user_id: require('../../../atoms/userRef-atom')
  email: require('../../../atoms/email-atom')
, password: require('../../../atoms/password-atom')
};

module.exports = new Schema(Molecule);
