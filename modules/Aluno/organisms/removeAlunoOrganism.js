'use strict';

require('../../../config/db');
const Organism = require('./alunoOrganism');
const callback = require('./organelles/callbackRemove');
const query = { _id: '57081cec33dba6e50fa558af' };

Organism.remove(query, callback);
