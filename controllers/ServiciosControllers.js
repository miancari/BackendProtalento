const serviciosModel = require('../models/Servicios');

const getAllServicios = (req, res) => {
    serviciosModel
        .getAllServicios()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getServicio = (req, res) => {
    const { id } = req.params
    serviciosModel
        .getServicio(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertServicios = (req, res) => {
    const { usuario_id, habilidad_id, precio } = req.body

        serviciosModel
            .insertServicio({ usuario_id, habilidad_id, precio })
            .then(results => res.status(201).json({ message: 'servicio agregado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
};

const updateServicio = (req, res) => {
    const { id } = req.params
    const { usuario_id, habilidad_id, precio } = req.body

    if (usuario_id !== '' && habilidad_id !== '' && precio !== '') {

        serviciosModel
            .updateServicio(id, { usuario_id, habilidad_id, precio })
            .then(results => res.status(201).json({ message: 'Servicio actualizado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({ message: 'Ingrese los datos solicitados' })
    }
};

const deleteServicio = (req, res) => {
    const { id } = req.params

    serviciosModel
        .deleteServicio(id)
        .then(results => res.status(201).json({ message: 'Servicio eliminado exitosamente' }))
        .catch(error => res.status(500).json(error));
};

const insertServicio = (req, res) => res.status(200).send({
    message: "Servicio"
});

module.exports = {
    getAllServicios,
    getServicio,
    insertServicios,
    updateServicio,
    deleteServicio,
    insertServicio
};