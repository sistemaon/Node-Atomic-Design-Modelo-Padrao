'use strict';

module.exports = (value) => {
  const regex = /(https?:\/\/(?:www\.|(?!www))?[^\s\.]+\.[^\s]{2,}|\.[^\s]{2,})/i;
  const isEmpty = require('./isEmpty-quark')(value);
  const isString = require('./isString-quark')(value);

  if(isEmpty) return false;
  if(!isString) return false;

  return regex.test(value);
};
