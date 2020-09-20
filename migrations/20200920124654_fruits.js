
exports.up = async function(knex) {
    //translates to CREATE TABLE "fruits"
  await knex.schema.createTable("fruits", (table) => {
    // table.integer("id").notNull().unique().primary()
    table.increments("id");
    table.text("name", 128).notNull().unique();
    table.float("avgWeightOz").notNull();
    table.boolean("deliciious").defaultTo(true);
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits");
};
