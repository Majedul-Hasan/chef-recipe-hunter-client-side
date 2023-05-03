/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useParams } from "react-router-dom";

import CardFoodAllRecipe from "./CardFoodAllRecipe";
import SectionHeader from "./SectionHeader";

const CategoryFetchedRecipes = () => {
  const AllRecipes = useLoaderData() || []
  // console.log(AllRecipes);
  const {cate} = useParams()
  
  return (
    <>
    { 
      AllRecipes.length > 0 ?<>
        <SectionHeader>{AllRecipes.length} recipe found for Category <span className="uppercase">"{cate}"</span>  </SectionHeader>
       
      <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-4/5 mx-auto gap-9 my-8">
        {
      AllRecipes?.map(res => <CardFoodAllRecipe key={res.idMeal} recipe={res} chef_id='56456464654'/> )
    }      </div> </>:<div><SectionHeader>No recipe found for Category <span className="uppercase">"{cate}"</span>  </SectionHeader></div> 
    }  
 
    </>
    
  )
}

export default CategoryFetchedRecipes