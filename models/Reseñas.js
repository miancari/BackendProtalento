const conecction = require('../knexfile')['development'];
const database = require('knex')(conecction);

const getAllReseñas = () => {
    return database('Reseñas')
}

const getReseñas = (idreseña) => {
    return database('Reseñas')
        .where( { id:idreseña} )
        .first()
}

const insertReseñas = (reseña) => {
    return database('Reseñas')
        .insert(reseña)
}

const updateReseña = (idreseña, reseña) => {
    return database('Reseña')
        .where('id', '=', idreseña)
        .update(reseña)
}

const deleteReseña = (idreseña) => {
    return database('Reseñas')
        .where('id', '=', idreseña)
        .del()
}

module.exports = {
    getAllReseñas,
    getReseñas,
    insertReseñas,
    updateReseña,
    deleteReseña
}