import { useLoaderData } from "react-router-dom";

import CardFoodAllRecipe from "./CardFoodAllRecipe";

const PrimaryFetchedRecipes = () => {
  const AllRecipes = useLoaderData() || []
  console.log(AllRecipes);
  
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-4/5 mx-auto gap-9 my-8">

    {
      AllRecipes?.map(res => <CardFoodAllRecipe key={res.idMeal} recipe={res} chef_id='56456464654'/>)
    }
    
 </div>
  )
}

export default PrimaryFetchedRecipes