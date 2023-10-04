/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('Servicios').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("Servicios", function (table) {
                table.increments('id').primary(); // Identificador único autoincremental
                table.integer('usuario_id').unsigned().notNullable(); // Clave foránea que referencia al usuario que ofrece el servicio
                table.foreign('usuario_id').references('id').inTable('Usuarios'); // Definición de la clave foránea para el usuario
                table.integer('habilidad_id').unsigned().notNullable(); // Clave foránea que referencia a la habilidad relacionada con el servicio
                table.foreign('habilidad_id').references('id').inTable('Habilidades'); // Definición de la clave foránea para la habilidad
                table.decimal('precio', 10, 2).notNullable(); // Precio del servicio, no puede ser nulo
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
