/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('Reseñas').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("Reseñas", function (table) {
                table.increments('id').primary(); // Identificador único autoincremental
                table.integer('usuario_emisor_id').unsigned().notNullable(); // Clave foránea que referencia al usuario que emite la reseña
                table.foreign('usuario_emisor_id').references('id').inTable('Usuarios'); // Definición de la clave foránea para el usuario emisor
                table.integer('usuario_receptor_id').unsigned().notNullable(); // Clave foránea que referencia al usuario que recibe la reseña
                table.foreign('usuario_receptor_id').references('id').inTable('Usuarios'); // Definición de la clave foránea para el usuario receptor
                table.integer('contrato_id').unsigned().notNullable(); // Clave foránea que referencia al contrato relacionado con la reseña
                table.foreign('contrato_id').references('id').inTable('Contratos'); // Definición de la clave foránea para el contrato
                table.integer('puntuacion').notNullable(); // Puntuación dada en la reseña (por ejemplo, en una escala del 1 al 5)
                table.text('comentario'); // Comentario o descripción adicional de la reseña (puede ser nulo)
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
