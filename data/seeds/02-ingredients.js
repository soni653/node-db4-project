exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "Cheese" },
    { name: "Dough" },
    { name: "Potato" },
    { name: "Oil" },
    { name: "Peas" },
    { name: "Bread" },
    { name: "Mayonise" },
    { name: "Vegetables" },
    { name: "Tortila" },
    { name: "Salsa" },
  ]);
};
