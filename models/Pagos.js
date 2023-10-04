const conecction = require("../knexfile")['development'];
const database = require('knex')(conecction);

const getAllPagos = () => {
    return database('Pagos');
}

const getPagos = (idpagos) => {
    return database('Pagos')
        .where( {id:idpagos} )
        .first()
}

const insertPagos = (pagos) => {
    return database('Pagos')
        .insert(pagos)
}

const updatePagos = (idpagos, pagos) => {
    return database('Pagos')
    .where('id', '=', idpagos)
    .update(pagos)
}

const deletePagos = (idpagos) => {
    return database('Pagos')
    .where('id', '=', idpagos)
    .del()
}

module.exports = {
    getAllPagos,
    getPagos,
    insertPagos,
    updatePagos,
    deletePagos
}