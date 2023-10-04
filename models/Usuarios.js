const conecction = require('../knexfile')['development'];
const database = require('knex')(conecction);

const getAllUsuarios = () => {
    return database('Usuarios')
}

const getUsuario = (idusuario) => {
    return database('Usuarios')
    .where( {id:idusuario} )
    .first()
}

const insertUsuario = (usuario) => {
    return database('Usuarios')
        .insert(usuario)
}

const updateUsuario = (idusuario, usuario) => {
    return database('Usuarios')
        .where('id', '=', idusuario)
        .update(usuario)
}

const deleteUsuario = (idusuario) => {
    return database('Usuarios')
        .where('id', '=', idusuario)
        .del()
}

module.exports = {
    getAllUsuarios,
    getUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario
}
