import { useLoaderData } from "react-router-dom"
import CardChef from "../components/CardChef";
import ChefsHero from "../components/chefsHero";
import SectionHeader from "../components/SectionHeader";
import RecipeDetail from "../components/RecipeDetail";


const RecipePage = () => {
    const {recipe, chefsProfil} = useLoaderData() || {}
  console.log(recipe, chefsProfil);
  const {experience, likes, name, bio, photoUrl, recipes} = chefsProfil || {}

  const {strCategory, strArea, strIngredients, strInstructions, strMeal, strMealThumb, strSource, strTags , idMeal} = recipe || {};
   
  return (
    <>
    <ChefsHero name={strMeal} bio= {`prepared by: ${name} `} photoUrl= {strMealThumb}  />
    
    <div className="grid grid-cols-1 md:grid-cols-3 my-8">
        <div className="recipe-container col-span-2">
        <SectionHeader>{strMeal}</SectionHeader>
        <RecipeDetail recipe = {recipe}/>
       
            
        </div>
        <div className="chef-container">
        <SectionHeader>Chef's info</SectionHeader>
        <CardChef chef = {chefsProfil} />
        </div>
    </div>
    </>
  )
}

export default RecipePage