const db = require("../data/config");

function getIngredientRecipes(ingredient_id) {
  return db("ingredients as i")
    .join("recipes_ingredients as ri", "i.id", "ri.ingredient_id")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .where("i.id", ingredient_id)
    .select("r.name");
}
module.exports = {
  getIngredientRecipes,
};
