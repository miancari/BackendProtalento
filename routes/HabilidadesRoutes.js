const express = require('express');
const router = express.Router();

const { getAllHabilidades, updateHabilidades, deletehabilidades, insertHabilidades, getHabilidades } = require('../controllers/HabilidadesControllers');

router.get('/', getAllHabilidades);

router.post('/', insertHabilidades)

router.put('/:id', updateHabilidades);

router.delete('/:id', deletehabilidades);

router.get('/:id', getHabilidades);

module.exports = router;