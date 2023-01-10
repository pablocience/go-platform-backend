const validateUserInputRecipeTableByRecipeName = (recipeName) => {
  let recipeInputTable = null;
  switch (recipeName) {
    case "recipe_1":
      recipeInputTable = "USER_INPUT_RECIPE_1";
      break;
    case "recipe_2":
      recipeInputTable = "USER_INPUT_RECIPE_2";
      break;
    case "recipe_3":
      recipeInputTable = "USER_INPUT_RECIPE_3";
      break;
    case "recipe_4":
      recipeInputTable = "USER_INPUT_RECIPE_4";
      break;
    case "recipe_5":
      recipeInputTable = "USER_INPUT_RECIPE_5";
      break;
    case "recipe_6":
      recipeInputTable = "USER_INPUT_RECIPE_6";
      break;
    default:
      recipeInputTable = null;
  }
  return recipeInputTable;
};
module.exports = {
  validateUserInputRecipeTableByRecipeName,
};
