exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('nombre', 50).notNullable();
    table.string('apellido', 50).notNullable();
    table.string('correo', 100).unique().notNullable();
    table.string('telefono', 20);
    table.string('password').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};

