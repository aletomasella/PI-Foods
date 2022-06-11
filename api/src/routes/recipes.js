const { Router, response } = require("express");
const axios = require("axios");
const { apiKey } = require("../db");
const api = require("../../apiRoutes");
const { filterData } = require("../utils");

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
    if (response.data.results) {
      const filteredData = response.data.results.map((recipe) =>
        filterData(recipe)
      );
      // res.send(response.data.results);
      res.send(filteredData);
    } else {
      res.send("No info available");
    }
  } else {
    res.send("You need to enter a name.");
  }
});

module.exports = router;
