'use strict';

module.exports = (Organism) => {

  const callbackExpress = require('../organelles/callbackExpress');

  return (req, res) => {
    let query = { _id: req.params.id };

    Organism.findOne(query, (err, data) => {
      callbackExpress(err, data, res);
    });
  };
};
