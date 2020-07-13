
exports.up = function(knex) {
  return knex.schema.createTable('players', p => {
      p.increments()
      p.string('first_name')
        .notNullable()
      p.string('last_name')
        .notNullable()
      p.string('team')
        .notNullable()
      p.string('number')
        .notNullable()
        .unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('players')
};
