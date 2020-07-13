
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, city: 'Los Angeles', nickname: 'Lakers', year_established: '1947'},
        {id: 2, city: 'Atlanta', nickname: 'Hawks', year_established: '1946'},
        {id: 3, city: 'Dallas', nickname: 'Mavericks', year_established: '1980'},
      ]);
    });
};
