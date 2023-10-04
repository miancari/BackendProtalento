/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('Pagos').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("Pagos", function (table) {
                table.increments('id').primary(); // Identificador único autoincremental
                table.integer('contrato_id').unsigned().notNullable(); // Clave foránea que referencia al contrato relacionado con el pago
                table.foreign('contrato_id').references('id').inTable('Contratos'); // Definición de la clave foránea para el contrato
                table.decimal('monto', 10, 2).notNullable(); // Monto total del pago, no puede ser nulo
                table.date('fecha').notNullable(); // Fecha en que se realizó el pago, no puede ser nulo
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
