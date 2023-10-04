/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('Contratos').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("Contratos", function (table) {
            table.increments('id').primary(); // Identificador único autoincremental
            table.integer('usuario_contratante_id').unsigned().notNullable(); // Clave foránea que referencia al usuario que contrata el servicio
            table.foreign('usuario_contratante_id').references('id').inTable('Usuarios'); // Definición de la clave foránea para el usuario contratante
            table.integer('usuario_proveedor_id').unsigned().notNullable(); // Clave foránea que referencia al usuario que provee el servicio
            table.foreign('usuario_proveedor_id').references('id').inTable('Usuarios'); // Definición de la clave foránea para el usuario proveedor
            table.integer('servicio_id').unsigned().notNullable(); // Clave foránea que referencia al servicio contratado
            table.foreign('servicio_id').references('id').inTable('Servicios'); // Definición de la clave foránea para el servicio
            table.string('estado').notNullable(); // Estado del contrato (por ejemplo, "pendiente", "en progreso", "completado")
            table.decimal('anticipo', 10, 2).notNullable(); // Monto del anticipo realizado por el usuario contratante
            table.timestamps(true, true); // Campos created_at y updated_at automáticos
            });
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};
