const express = require("express");
const db = require("./ingredients-modal");
const router = express.Router();

router.get("/:id/recipes", async (req, res) => {
  const id = req.params.id;
  try {
    const recipes = await db.getIngredientRecipes(id);
    if (recipes) {
      return res.status(200).json(recipes);
    }
    res.status(404).json({
      message: "Shopping list not found",
    });
  } catch (error) {
    res.status(500).json({ message: "Sorry couldn't find the data" });
  }
});

module.exports = router;
