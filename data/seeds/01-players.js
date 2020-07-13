
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, first_name: 'Lebron', last_name: 'James', team: 'Lakers', number: '23'},
        {id: 2, first_name: 'Kyrie', last_name: 'Irving', team: 'Nets', number: '2'},
        {id: 3, first_name: 'Steph', last_name: 'Curry', team: 'Warriors', number: '30'},
      ]);
    });
};
