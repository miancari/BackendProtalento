const express = require('express');
const router = express.Router();

const { getAllServicios, insertServicios, updateServicio, deleteServicio, getServicio } = require('./../controllers/ServiciosControllers');

router.get('/', getAllServicios);
router.post('/', insertServicios);
router.put('/:id', updateServicio);
router.delete('/:id', deleteServicio);
router.get('/:id', getServicio);

module.exports = router;