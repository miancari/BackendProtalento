const express = require('express');
const router = express.Router();

const {insertPagos, getAllPagos, deletePago, updatepago, getPagos } = require('./../controllers/PagosControllers');

router.get('/', getAllPagos );
router.post('/', insertPagos);
router.put('/:id', updatepago);
router.delete('/:id', deletePago);
router.get('/:id', getPagos);

module.exports = router;