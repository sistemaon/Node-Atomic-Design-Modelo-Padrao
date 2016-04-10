'use strict';

module.exports = (value) => {
  const isEmpty = require('./isEmpty-quark')(value);
  const isString = require('./isString-quark')(value);

  if(isEmpty) return false;
  if(!isString) return false;

  return (value.length > 3 && value.length < 80);
};
