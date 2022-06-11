const { Router, response } = require("express");
const axios = require("axios");
const { apiKey } = require("../db");
const api = require("../../apiRoutes");

const router = Router();

const addRecipeInfo = "&addRecipeInformation=true";
const numberOfRecipes = "&number=100";

router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const response = await axios.get(
      `${api.searchRecipes}?query=${name}&apiKey=${apiKey}${addRecipeInfo}${numberOfRecipes}`
    );
    // console.log(response.data);
    if (response.data) {
      res.send(response.data);
    } else {
      res.send("No info available");
    }
  } else {
    res.send("You need to enter a name.");
  }
});

module.exports = router;
