const conecction = require("../knexfile")['development'];
const database = require('knex')(conecction);

const getAllHabilidades = () => {
    return database('Habilidades');
}

const getHabilidades = (idhabilidades) => {
    return database('Habilidades')
    .where( { id:idhabilidades } )
    .first();
}

const insertHabilidades = (habilidades) => {
    return database('Habilidades')
        .insert(habilidades);
}

const updateHabilidades = (idhabilidades, habilidades) => {
    return database('Habilidades')
        .where('id', '=', idhabilidades)
        .update(habilidades)
}

const deleteHabilidades = (idhabilidades) => {
    return database('Habilidades')
    .where('id', '=', idhabilidades)
    .del()
}

module.exports = {
    getAllHabilidades,
    getHabilidades,
    insertHabilidades,
    updateHabilidades,
    deleteHabilidades
}