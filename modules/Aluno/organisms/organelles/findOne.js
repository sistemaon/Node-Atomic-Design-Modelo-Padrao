'use strict';
const mongoose = require('mongoose');

module.exports = (Organism) => {
  return (query, callback) => {

    Organism
      .findOne(query)
      .lean()
      .exec( (err, data) => {
        if(err) return console.log('ERRO', err);

        mongoose.model('Alunos')
          .findOne({ user_id: data.user_id })
          .lean()
          .exec( (err, sub) => {
            data['user'] = sub;
            callback(err, data);
          });
      });
  }
};
