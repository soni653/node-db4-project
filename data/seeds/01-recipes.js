exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Pizza" },
    { name: "Fries" },
    { name: "Samosa" },
    { name: "Sandwich" },
    { name: "Tacos" },
  ]);
};
