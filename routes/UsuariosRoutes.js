const express = require('express');
const router = express.Router();

const { getAllUsuarios, deleteUsuario, updateUsuario, getUsuario, insertUsuarios }= require('../controllers/UsuariosControllers');

router.get('/', getAllUsuarios);

router.post('/', insertUsuarios);

router.delete('/:id', deleteUsuario);

router.put('/:id', updateUsuario)

router.get('/:id', getUsuario);

module.exports = router;