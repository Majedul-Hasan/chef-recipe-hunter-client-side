/* eslint-disable react/prop-types */
import TableForIngredients from "./TableForIngredients";


const RecipeDetail = ({recipe}) => {
  console.log(recipe);

  const {strCategory, strArea, strIngredients, strInstructions, strMeal, strMealThumb, strSource, strTags , idMeal} = recipe || {};
  return (
    <>
    {
      recipe?.idMeal && <TableForIngredients ingredients = {strIngredients} />

    }
   
    
    
    </>






  )
}

export default RecipeDetail