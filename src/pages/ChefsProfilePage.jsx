import { useLoaderData } from "react-router-dom"
import ChefsHero from "../components/chefsHero";

const ChefsProfilePage = () => {
    const ChefsRecipes = useLoaderData()
    const {experience, likes, name, bio, photoUrl} = ChefsRecipes || {}

    console.log(ChefsRecipes);

  return (
   <>
   <ChefsHero name={name} bio= {bio} photoUrl= {photoUrl} likes={likes} experience= {experience} />
   </>
  )
}

export default ChefsProfilePage