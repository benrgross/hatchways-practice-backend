const router = require("express").Router();
const recipeRoutes = require("./recipe.js");

// direct router to recipe routes file
router.use("/recipes", recipeRoutes);

module.exports = router;
