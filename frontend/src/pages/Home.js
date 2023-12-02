import "../styles/Home.css";
import { Heading } from "@chakra-ui/react";
import InputForm from "../components/InputForm";
import RecipeList from "../components/RecipeList";
import { useState } from "react";
import RecipeExpand from "../components/RecipeExpand.js";

function Home() {
  const [displayRecipe, setDisplayRecipe] = useState(false);
  const [fetchdata, setFetchData] = useState(null);

  const [expand, setExpand] = useState(false);
  const [expandRecipe, setExpandRecipe] = useState(null);
  const [expandInstructions, setExpandInstructions] = useState(null);
  const [expandIngredients, setExpandIngredients] = useState(null);

  const handleFetchData = (data) => {
    setFetchData(data);
    setDisplayRecipe(true);
  };

  const handleExpandOpen = (recipe, ingredients, instruction) => {
    setExpand(true);
    setExpandRecipe(recipe);
    setExpandInstructions(instruction);
    setExpandIngredients(ingredients);
  };

  const handleExpandClose = () => {
    setExpand(false);
    setExpandRecipe(null);
    setExpandInstructions(null);
    setExpandIngredients(null);
  };

  return (
    <div className="main-container">
      {!displayRecipe ? (
        <>
          <Heading fontSize="4xl" fontWeight="bold" mb={4}>
            Find Recipes with Your Ingredients{" "}
          </Heading>
          <InputForm handler={handleFetchData} />
        </>
      ) : (
        <RecipeList data={fetchdata} onExpand={handleExpandOpen} />
      )}
      <RecipeExpand
        isOpen={expand}
        onClose={handleExpandClose}
        recipe={expandRecipe}
        ingredients={expandIngredients}
        instructions={expandInstructions}
      />
    </div>
  );
}

export default Home;
