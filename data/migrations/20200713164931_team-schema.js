
exports.up = function(knex) {
    return knex.schema.createTable('teams', t => {
        t.increments()
        t.string('city')
          .notNullable()
        t.string('nickname')
          .notNullable()
          .unique()
        t.string('year_established')
          .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('teams')
};
