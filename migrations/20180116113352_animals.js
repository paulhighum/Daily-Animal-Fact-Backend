exports.up = function(knex, Promise){
  return knex.schema.createTable("animals", table => {
    table.increments("id").primary()
    table.text("name")
    table.text("scientific_name")
    table.text("image")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("animals")
}
