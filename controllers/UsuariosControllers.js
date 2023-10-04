const usuariosModel = require('../models/Usuarios');

const getAllUsuarios = (req, res) => {
    usuariosModel
        .getAllUsuarios()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getUsuario = (req, res) => {
    const { id } = req.params
    usuariosModel
        .getUsuario(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertUsuarios = (req, res) => {
    const { nombre, correo_electronico, contraseña } = req.body

    if (nombre !== '' && correo_electronico !== '' && contraseña !== '') {

        usuariosModel
            .insertUsuario({ nombre, correo_electronico, contraseña })
            .then(results => res.status(201).json({ message: 'Usuario agregado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({ message: 'Ingrese los datos solicitados' })
    }
};

const updateUsuario = (req, res) => {
    const { id } = req.params
    const { nombre, correo_electronico, contraseña } = req.body

    if ( nombre!== '' && correo_electronico!== '' && contraseña!== '') {

        usuariosModel
            .updateUsuario(id, { nombre, correo_electronico, contraseña })
            .then(results => res.status(201).json({ message: 'Usuario actualizado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({ message: 'Ingrese los datos solicitados' })
    }
};

const deleteUsuario = (req, res) => {
    const { id } = req.params

    usuariosModel
        .deleteUsuario(id)
        .then(results => res.status(201).json({ message: 'Usuario eliminado exitosamente' }))
        .catch(error => res.status(500).json(error));
};

const insertUsuario = (req, res) => res.status(200).send({
    message: "Servicio"
});

module.exports = {
    getAllUsuarios,
    getUsuario,
    insertUsuarios,
    deleteUsuario,
    updateUsuario,
    insertUsuario
};