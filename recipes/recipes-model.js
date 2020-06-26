const db = require("../data/config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  console.log(recipe_id);
  return db("recipes as r")
    .join("recipes_ingredients as ri", "r.id", "ri.recipe_id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .where("r.id", recipe_id)
    .select("i.name", "ri.ingredient_id", "r.name as recipe_name");
}

function getInstructions(recipe_id) {
  return db("recipes as r")
    .join("instructions as i", "r.id", "i.recipe_id")
    .orderBy("i.step")
    .select("r.name", "i.step", "i.instruction");
}
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
