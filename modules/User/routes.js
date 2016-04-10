'use strict';

const express = require('express');
const router = express.Router();
const Organism = require('./organisms/userOrganism');
const Create = require('./organisms/brains/createCallbackBrain')(Organism);
const Find = require('./organisms/brains/findCallbackBrain')(Organism);
const FindOne = require('./organisms/brains/findOneCallbackBrain')(Organism);
const Update = require('./organisms/brains/updateCallbackBrain')(Organism);
const Remove = require('./organisms/brains/removeCallbackBrain')(Organism);

router.get('/', Find);

router.get('/:id', FindOne);
router.post('/', Create);
router.put('/:id', Update);
router.delete('/:id', Remove);

module.exports = router;
