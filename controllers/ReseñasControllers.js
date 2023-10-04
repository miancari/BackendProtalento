const reseñaModel = require('../models/Reseñas');

const getAllReseñas = (req, res) => {
    reseñaModel
        .getAllReseñas()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getReseñas = (req, res) => {
    const { id } = req.params
    reseñaModel
        .getReseñas(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertReseñas = (req, res) => {
    const { usuario_emisor_id, usuario_receptor_id, contrato_id, puntuacion, comentario } = req.body

        reseñaModel
            .insertReseñas({ usuario_emisor_id, usuario_receptor_id, contrato_id, puntuacion, comentario })
            .then(results => res.status(201).json({ message: 'Reseña agregada exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
};

const updateReseña = (req, res) => {
    const { id } = req.params
    const { usuario_emisor_id, usuario_receptor_id, contrato_id, puntuacion, comentario } = req.body

        reseñaModel
            .updateReseña(id, { contrato_id, monto, fecha })
            .then(results => res.status(201).json({ message: 'Reseña actualizada exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
};

const deleteReseña = (req, res) => {
    const { id } = req.params

    reseñaModel
        .deleteReseña(id)
        .then(results => res.status(201).json({ message: 'Pago eliminado exitosamente' }))
        .catch(error => res.status(500).json(error));
};

const insertReseña = (req, res) => res.status(200).send({
    message: "Pago"
});

module.exports = {
    getAllReseñas,
    getReseñas,
    insertReseñas,
    updateReseña,
    deleteReseña,
    insertReseña
};