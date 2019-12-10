
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments();
        table.string('Make',128).notNullable();
        table.float('VIN',17).notNullable();
        table.float('Model',4).notNullable();
        table.float('Mileage',128).notNullable();
        table.string('Transmission_Type',128);
        table.string('Transmission_Status',128);
        table.timestamps(true,true);
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars', function (table) {
        table.increments();
        table.string('name');
        table.timestamps();
      })
};
