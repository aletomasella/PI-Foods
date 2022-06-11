const filterData = (data) => {
  return {
    title: data.title ? data.title : "No title available",
    readyIn: data.readyInMinutes,
    source: data.sourceUrl,
    image: data.image,
    summary: data.summary,
    dishTypes: data.dishTypes,
    instructions: data.analyzedInstructions[0]
      ? data.analyzedInstructions[0].steps.map((e) => {
          return {
            number: e.number,
            step: e.step,
            ingredients: e.ingredients.map((ing) => ing.name),
          };
        })
      : "No information available",
    diets: data.diets,
  };
};

module.exports = {
  filterData,
};
