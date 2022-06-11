const { Router } = require("express");
// Importar todos los routers;
const searchRecipes = require("./recipes");

const router = Router();

// Configurar los routers
router.use("/recipes", searchRecipes);

module.exports = router;
