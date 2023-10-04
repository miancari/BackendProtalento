const conecction = require("../knexfile")['development'];
const database = require('knex')(conecction);


const getAllContrato = () => {
    //consultando a todos los elementos dentro de la tabla Contrato
    //select * from Contrato
    return database('Contratos');
}

const getContrato = (idcontrato) => {
    // Solicitar consulta de un solo cliente
    return database('Contratos')
    .where( { id:idcontrato })
    .first();
};

const insertContrato = (contrato) => {
    // insert into Contrato (first_name,...) values('Maria'....)
    return database('Contratos')
        .insert(contrato);
};

const updateContrato = (idcontrato, contrato) => {
    return database('Contratos')
        .where('id', '=', idcontrato)
        .update(contrato)
}

const deleteContrato = (idcontrato) => {

    return database('Contratos')
        .where('id', '=', idcontrato)
        .del()
}

module.exports = {
    getAllContrato,
    getContrato,
    insertContrato,
    updateContrato,
    deleteContrato
}