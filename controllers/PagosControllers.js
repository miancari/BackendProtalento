const pagoModel = require('../models/Pagos');

const getAllPagos = (req, res) => {
    pagoModel
        .getAllPagos()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getPagos = (req, res) => {
    const { id } = req.params
    pagoModel
        .getPagos(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertPagos = (req, res) => {
    const { contrato_id, monto, fecha } = req.body

    if (contrato_id!== '' && monto!== '') {

        pagoModel
            .insertPagos({ contrato_id, monto, fecha })
            .then(results => res.status(201).json({ message: 'Pago agregado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({ message: 'Ingrese los datos solicitados' })
    }
};

const updatepago = (req, res) => {
    const { id } = req.params
    const { contrato_id, monto, fecha } = req.body

    if (contrato_id!== '' && monto!== '') {

        pagoModel
            .updatePagos(id, { contrato_id, monto, fecha })
            .then(results => res.status(201).json({ message: 'Pago actualizado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({ message: 'Ingrese los datos solicitados' })
    }
};

const deletePago = (req, res) => {
    const { id } = req.params

    pagoModel
        .deletePagos(id)
        .then(results => res.status(201).json({ message: 'Pago eliminado exitosamente' }))
        .catch(error => res.status(500).json(error));
};

const insertPago = (req, res) => res.status(200).send({
    message: "Pago"
});

module.exports = {
    getAllPagos,
    getPagos,
    insertPagos,
    deletePago,
    updatepago,
    insertPago
};