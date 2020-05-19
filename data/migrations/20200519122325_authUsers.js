exports.up = function (knex) {
  return knex.schema.createTable("auth_user", (table) => {
    table.increments();
    table.string("username", 255).notNullable();
    table.string("password", 255).notNullable();
    table.string("department", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("auth_user");
};
