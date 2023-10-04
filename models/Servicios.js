const conecction = require('../knexfile')['development'];
const database = require('knex')(conecction);

const getAllServicios = () => {
    return database('Servicios')
}

const getServicio = (idservicio) => {
    return database('Servicios')
        .where( { id:idservicio } )
        .first()
}

const insertServicio = (servicio) => {
    return database('Servicios')
        .insert(servicio)
}

const updateServicio = (idservicio, servicio) => {
    return database('Servicios')
        .where('id', '=', idservicio)
        .update(servicio)
}

const deleteServicio = (idservicio) => {
    return database('Servcios')
    .where('id', '=', idservicio)
    .del()
}

module.exports = {
    getAllServicios,
    getServicio,
    insertServicio,
    updateServicio,
    deleteServicio
}