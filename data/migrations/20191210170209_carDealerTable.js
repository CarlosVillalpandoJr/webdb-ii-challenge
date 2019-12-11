
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        
        tbl.string('VIN', 17)
            .notNullable()
            .unique();

        tbl.string('Make', 100)
            .notNullable();

        tbl.string('Model', 100)
            .notNullable();
            
        tbl.integer('Mileage', 200)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
