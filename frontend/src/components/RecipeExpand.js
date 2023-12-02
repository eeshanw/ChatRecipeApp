import "../styles/RecipeExpand.css";
import { Heading } from "@chakra-ui/react";

function RecipeExpand({ isOpen, onClose, recipe, ingredients, instructions }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="popup">
      <div className="data-container">
        <div className="title-container">
          <Heading fontsize="lg" fontweight="bold">
            {recipe}
          </Heading>
          <button className="x-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="ingredients-list">
          <Heading size="md" fontweight="bold" mb={4}>
            Ingredients:
          </Heading>
          {ingredients.map((ingredient, index) => (
            <ol key={index}>{ingredient}</ol>
          ))}
        </div>
        <div className="instruction-list">
          <Heading size="md" fontweight="bold" mb={4}>
            Instructions:
          </Heading>
          {instructions.map((instruction, index) => (
            <ol key={index}>{instruction}</ol>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeExpand;
