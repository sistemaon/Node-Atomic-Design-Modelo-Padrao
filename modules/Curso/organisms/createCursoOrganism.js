'use strict';

require('../../../config/db');
const Organism = require('./cursoOrganism');
const callback = require('./organelles/callback');
const obj = {
  name: 'Node.JS'
, dateBegin: new Date('2016/05/20')
, link: 'https://github.com/Webschool-io/workshop-js-node.js-free'
}

Organism.create(obj, callback);
