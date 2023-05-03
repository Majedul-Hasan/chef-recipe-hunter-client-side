import { useLoaderData } from "react-router-dom"
import CardChef from "../components/CardChef";
import ChefsHero from "../components/chefsHero";
import SectionHeader from "../components/SectionHeader";
import RecipeDetail from "../components/RecipeDetail";


const RecipePage = () => {
    const {recipe, chefsProfil} = useLoaderData() || {}
  // console.log(recipe, chefsProfil);
  const {experience, likes, name, bio, photoUrl, recipes} = chefsProfil || {}

  const {strCategory, strArea, strIngredients, strInstructions, strMeal, strMealThumb, strSource, strTags , idMeal} = recipe || {};
   
  return (
    <>
    <ChefsHero name={strMeal} bio= {`prepared by: ${name} `} photoUrl= {strMealThumb}  />
    
    <div className="grid grid-cols-1 md:grid-cols-3 my-8 md:w-4/5 w-full md:mx-auto mx-1 gap-9 border-b-4 border-indigo-400 pb-8 ">
        <div className="recipe-container col-span-2">
          <div className="underline">
            <SectionHeader>{strMeal}</SectionHeader>

          </div>
        <RecipeDetail recipe = {recipe}/>
       
            
        </div>
        <div className="chef-container">
        <SectionHeader>Chef's info</SectionHeader>
        <CardChef chef = {chefsProfil} />
        </div>
    </div>
    <div className=" my-8 md:w-4/5 w-full md:mx-auto mx-1 gap-9 border-b-4 border-indigo-400 pb-8 ">
      <SectionHeader> cooking method/Instructions  </SectionHeader>
      <p>
        {strInstructions}
      </p>
      <div className="flex justify-center my-8">
        <img src={strMealThumb} alt="" />
      </div>


    </div>


    </>
  )
}

export default RecipePage