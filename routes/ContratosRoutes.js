const express = require('express');
const router = express.Router();

//const {ContratosControllers} = require('./../controllers');
const { getAllContratos, updateContrato, deleteContrato, getContrato, insertContrato } = require('../controllers/ContratosControllers');

router.get('/', getAllContratos);

router.post('/', insertContrato);

router.put('/:id', updateContrato);

router.delete('/:id', deleteContrato);

router.get('/:id', getContrato);

module.exports = router;