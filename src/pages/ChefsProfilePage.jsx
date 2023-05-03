import { useLoaderData } from "react-router-dom"
import ChefsHero from "../components/chefsHero";
import CardFood from "../components/CardFood";
import SectionHeader from "../components/SectionHeader";

const ChefsProfilePage = () => {
    const ChefsRecipes = useLoaderData()
    const {experience, likes, name, bio, photoUrl, recipes, _id, recipesNew} = ChefsRecipes || {}

    // console.log(ChefsRecipes);

  return (
   <>
   <ChefsHero name={name} bio= {bio} photoUrl= {photoUrl} likes={likes} experience= {experience} recipes={recipes} />
   <div className="pt-8 underline">
   <SectionHeader > {recipes.length} popular Italian recipes </SectionHeader>
   </div>
   <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-4/5 mx-auto gap-9 my-8">

      {
        recipesNew?.map(res => <CardFood key={res.idMeal} recipe={res} chef_id={_id}/>)
      }
      
   </div>
   </>
  )
}

export default ChefsProfilePage