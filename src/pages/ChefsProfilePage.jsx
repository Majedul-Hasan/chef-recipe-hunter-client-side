import { useLoaderData } from "react-router-dom"

const ChefsProfilePage = () => {
    const ChefsRecipes = useLoaderData()

    console.log(ChefsRecipes);

  return (
    <div>ChefsProfilePage</div>
  )
}

export default ChefsProfilePage