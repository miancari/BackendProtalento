const habilidadesModel = require('../models/Habilidades');

const getAllHabilidades = (req, res) => {
    habilidadesModel
        .getAllHabilidades()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const getHabilidades = (req, res) => {
    const { id } = req.params
    habilidadesModel
        .getHabilidades(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const insertHabilidades = (req, res) => {
    const { nombre, descripcion, precio_por_hora } = req.body

    if (nombre !== '' && descripcion !== '' && precio_por_hora !== '') {

        habilidadesModel
            .insertHabilidades({ nombre, descripcion, precio_por_hora })
            .then(results => res.status(201).json({ message: 'Habilidad ingresada exitosamente 🚀'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send( { message: 'Se deben ingresar todos los datos'})
    }
}

const updateHabilidades = (req, res) => {
    const { id } = req.params
    const { nombre, descripcion, precio_por_hora } = req.body

    if (nombre !== '' && descripcion !== '' && precio_por_hora !== '') {

        habilidadesModel
            .updateHabilidades(id, { nombre, descripcion, precio_por_hora })
            .then(results => res.status(201).json({ message: 'Habilidad actualizada exitosamente 🚀'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send( { message: 'Ingrese los datos solicitados'})
    }
}

const deletehabilidades = (req, res) => {
    const { id } = req.params

        habilidadesModel
            .deleteHabilidades(id)
            .then(results => res.status(201).json({ message: 'Habilidad eliminada exitosamente'}))
            .catch(error => res.status(500).json(error));
}

const insertHabilidad = (req, res) => res.status(200).send({
    message: "Habilidad"
})

module.exports = {
    getAllHabilidades,
    getHabilidades,
    insertHabilidades,
    updateHabilidades,
    deletehabilidades,
    insertHabilidad
}