import Recipe from "./Recipe";
import "../styles/RecipeList.css";
import { Heading } from "@chakra-ui/react";

function RecipeList({ data, onExpand }) {
  //   const { recipe, ingredients, instructions } = data;

  return (
    <>
      <Heading fontsize="4xl" fontweight="bold" mb={4}>
        Recipes You Can Make
      </Heading>
      <div className="recipe-list">
        {data.map((recipe) => (
          <Recipe
            recipe={recipe.recipe}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            onExpand={onExpand}
          />
        ))}
      </div>
    </>
  );
}

export default RecipeList;
