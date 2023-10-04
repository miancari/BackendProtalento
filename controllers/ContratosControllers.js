const contratoModel = require('../models/Contratos');

const getAllContratos = (req, res) => {
    contratoModel
        .getAllContrato()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getContrato = (req, res) => {
    const { id } = req.params
    contratoModel
        .getContrato(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertContrato = (req, res) => {
    const { usuario_contratante_id, usuario_proveedor_id, servicio_id, estado, anticipo } = req.body

            contratoModel
            .insertContrato({ usuario_contratante_id, usuario_proveedor_id, servicio_id, estado, anticipo  })
            .then(results => res.status(201).json({ message: 'Contrato agregado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
};

const updateContrato = (req, res) => {
    const { id } = req.params
    const { usuario_contratante_id, usuario_proveedor_id, servicio_id, estado, anticipo  } = req.body

    if (usuario_contratante_id !== '' && usuario_proveedor_id !== '') {

        contratoModel
            .updateContrato(id, { usuario_contratante_id, usuario_proveedor_id, servicio_id, estado, anticipo  })
            .then(results => res.status(201).json({ message: 'Contrato actualizado exitosamente🚀' }))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({ message: 'Ingrese los datos solicitados' })
    }
};

const deleteContrato = (req, res) => {
    const { id } = req.params

    contratoModel
        .deleteContrato(id)
        .then(results => res.status(201).json({ message: 'Cliente eliminado exitosamente' }))
        .catch(error => res.status(500).json(error));
};

const insertContratos = (req, res) => res.status(200).send({
    message: "Contratos"
});

module.exports = {
    getAllContratos,
    getContrato,
    insertContrato,
    updateContrato,
    deleteContrato,
    insertContratos
};