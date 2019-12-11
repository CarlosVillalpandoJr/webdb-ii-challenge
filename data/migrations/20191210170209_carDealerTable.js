
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        
        tbl.string('vin', 17)
            .notNullable()
            .unique();

        tbl.string('make', 100)
            .notNullable();

        tbl.string('model', 100)
            .notNullable();
            
        tbl.integer('mileage')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};