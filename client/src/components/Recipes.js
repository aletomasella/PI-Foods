import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {}, []);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${api.getRecipesByName}${input}`)
      .then((response) => response.data)
      .then((result) => setRecipes(result))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="flex m-1 flex-wrap">
        <h1>Recipes</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={input}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
        {recipes.length !== 0 ? (
          <div className="flex flex-wrap align-middle text-center justify-evenly">
            {recipes.map((e) => {
              return (
                <div
                  key={e.id}
                  className="border border-solid border-black rounded"
                >
                  <h3>{e.title}</h3>
                  <img
                    src={e.image}
                    alt="Recipe"
                    width={"100%"}
                    height="200px"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <h2>Need to Search For a Recipe</h2>
        )}
      </div>
    </>
  );
};

export default Recipes;
