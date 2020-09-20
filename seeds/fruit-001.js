
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {name: "Strawberry", avgWeightOz: .42, color: 'Red'}
      ]);
    });
};
