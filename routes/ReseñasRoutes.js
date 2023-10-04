const express = require('express');
const router = express.Router();

const { getAllReseñas, insertReseña, updateReseña, deleteReseña, getReseñas } = require('./../controllers/ReseñasControllers');

router.get('/', getAllReseñas);
router.post('/', insertReseña);
router.put('/:id', updateReseña);
router.delete('/:id', deleteReseña);
router.get('/:id', getReseñas);

module.exports = router;