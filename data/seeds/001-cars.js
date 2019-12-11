
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    // .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "278F8D7S6A5QGWTEY", make: "Chevy", model: "Cruiser", mileage: 120000},
        {vin: "JFHDYS73625S7DJF8", make: 'Ford', model: "Clachuacha", mileage: 190000},
        {vin: "JS82J29D9A0KD9S8X", make: 'Tesla', model: "3", mileage: 10000}
      ]);
    });
};
