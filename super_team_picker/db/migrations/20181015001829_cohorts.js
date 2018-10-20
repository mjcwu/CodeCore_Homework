
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", table =>{
    table.increments("id"); 
    table.string("Name"); 
    table.text("logoUrl");
    table.text("Members"); 
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cohorts");
};
