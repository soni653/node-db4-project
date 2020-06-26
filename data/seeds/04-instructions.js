exports.seed = function (knex) {
  return knex("instructions").insert([
    {
      step: 1,
      instruction: "Preheat pizza stone (or pizza pan or baking sheet)",
      recipe_id: 1,
    },
    { step: 2, instruction: "Spread cheese on Pizza dough", recipe_id: 1 },
    { step: 3, instruction: "Prep toppings", recipe_id: 1 },
    { step: 4, instruction: "Brush dough top with olive oil", recipe_id: 1 },
    {
      step: 5,
      instruction:
        "Sprinkle cornmeal on pizza stone, slide pizza onto pizza stone in oven",
      recipe_id: 1,
    },
    { step: 6, instruction: "Bake pizza", recipe_id: 1 },
  ]);
};
