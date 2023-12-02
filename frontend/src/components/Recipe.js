// props are recipe (title), instructions (list of instructions), ingredients (list of ingredients)
import "../styles/Recipe.css";
import { Heading } from "@chakra-ui/react";

function Recipe({ recipe, instructions, ingredients, onExpand }) {
  const handleExpand = () => {
    onExpand(recipe, ingredients, instructions);
  };

  return (
    <div className="container">
      <div className="img-container">
        <div className="image"></div>
      </div>
      <div className="recipe-name-container">
        <Heading fontSize="2xl" fontWeight="bold">
          {recipe}
        </Heading>
      </div>
      <div className="button-box">
        <button className="extra-buttons">Save</button>
        <button className="extra-buttons" onClick={handleExpand}>
          Expand
        </button>
      </div>
    </div>
  );
}

export default Recipe;
