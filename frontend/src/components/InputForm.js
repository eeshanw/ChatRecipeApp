import "../styles/InputForm.css";
import { useState } from "react";

function InputForm({ handler }) {
  // create input form for the home page
  // initially has fields for 3 ingredients and their measurements
  // use an add ingredient button to create a new input field for the

  //array to store all ingredients
  const [ingredients, setIngredients] = useState([]);
  //store quantity of ingredient
  const [quantity, setQuantity] = useState("");
  //store unit of measurement
  const [unit, setUnit] = useState("");
  //store ingredient name
  const [ingredientName, setIngredientName] = useState("");

  // handler for addIngredient button
  const addIngredient = () => {
    if (unit && quantity && ingredientName) {
      const newIngredient = `${quantity} ${unit} ${ingredientName}`;
      setIngredients([...ingredients, newIngredient]);
      setIngredientName("");
      setQuantity("");
      setUnit("");
    } else {
      console.log("One or more fields is missing a value.");
    }
  };

  const clearIngredients = () => {
    setIngredients([]);
  };

  const handleSubmit = () => {
    // add error popup for ingredients.length < 3
    if (ingredients.length < 5) {
      console.log("Enter at least 3 ingredients");
    } else {
      // console.log(ingredients.join());
      var num = 2;
      const req = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: ingredients.join(", "),
          number: num,
        }),
      };
      try {
        fetch("http://127.0.0.1:5000/chat-gpt", req)
          .then((res) => res.json())
          .then((data) => {
            handler(data);
          });
      } catch {
        console.log("Post request failed");
      }
    }
  };

  function deleteIngredient(index) {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  }

  return (
    <div className="outline">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addIngredient();
        }}
      >
        <div className="input-holder">
          <div className="input-wrapper">
            <input
              className="input-fields"
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="select-wrapper">
            <select
              className="select-meas"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="">Select Unit</option>
              <option value="g">gram(s)</option>
              <option value="cup">cup(s)</option>
              <option value="ml">milliliter(s)</option>
              <option value="tbsp">tablespoon(s)</option>
              <option value="tsp">teaspoon(s)</option>
            </select>
          </div>
          <div className="input-wrapper">
            <input
              className="input-fields"
              type="text"
              placeholder="Ingredient"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            />
          </div>
          <button className="ingred-button" type="submit">
            Add
          </button>
        </div>
      </form>
      <div>
        <ol className="ingredients">
          {ingredients.map((ingredient, index) => (
            <li
              className="ingredient-item"
              key={index}
              onClick={() => deleteIngredient(index)}
            >
              {ingredient}
            </li>
          ))}
        </ol>
      </div>
      <div className="button-holder">
        <button className="button-submit" onClick={clearIngredients}>
          Clear All
        </button>
        {ingredients.length > 4 ? (
          <button className="button-submit" onClick={handleSubmit}>
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default InputForm;
