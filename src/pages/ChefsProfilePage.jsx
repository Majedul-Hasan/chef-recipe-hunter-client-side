import { useLoaderData } from "react-router-dom"
import ChefsHero from "../components/chefsHero";
import CardFood from "../components/CardFood";
import SectionHeader from "../components/SectionHeader";

const ChefsProfilePage = () => {
    const ChefsRecipes = useLoaderData()
    const {experience, likes, name, bio, photoUrl, recipes, recipesNew} = ChefsRecipes || {}

    console.log(ChefsRecipes);

  return (
   <>
   <ChefsHero name={name} bio= {bio} photoUrl= {photoUrl} likes={likes} experience= {experience} />
   <SectionHeader > {recipes.length} popular Italian recipes </SectionHeader>
   {
    recipesNew?.map(res => <CardFood key={res.idMeal} recipe={res}/>)
   }
   
   </>
  )
}

export default ChefsProfilePage