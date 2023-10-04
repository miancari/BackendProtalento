/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.hasTable('Habilidades').then((exists) => {
    if (!exists) {
        return knex.schema.createTable("Habilidades", function (table) {
            table.increments('id').primary(); // Identificador único autoincremental
            table.string('nombre').notNullable(); // Nombre de la habilidad, no puede ser nulo
            table.text('descripcion'); // Descripción detallada de la habilidad (puede ser nulo)
            table.decimal('precio_por_hora', 10, 2).notNullable(); // Precio por hora de trabajo, no puede ser nulo
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
