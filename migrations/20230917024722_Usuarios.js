/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('Usuarios').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("Usuarios", function (table) {
                table.increments('id').primary(); // Identificador único autoincremental
                table.string('nombre').notNullable(); // Nombre del usuario, no puede ser nulo
                table.string('correo_electronico').notNullable().unique(); // Correo electrónico único, no puede ser nulo
                table.string('contraseña').notNullable(); // Contraseña, no puede ser nulo
                table.timestamps(true, true); // Campos created_at y updated_at automáticos
            });
        };
    })    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
