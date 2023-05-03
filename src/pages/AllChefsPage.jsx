import { useLoaderData } from "react-router-dom"
import SectionHero from "../components/SectionHero"
import CardChef from "../components/CardChef"


const AllChefsPage = () => {
  const data = useLoaderData()

  return (
   <>
      <SectionHero pageName = 'All our talented chefs For Italian Foods' pageStory = 'search your favorite recipes by  world famous chefs' />
      <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-4/5 mx-auto gap-9 my-8">
        {
          data         
          ?.map((ch)=> <CardChef key={ch._id} chef = {ch}  />
         )
        }
           
      </div>

   </>
  )
}

export default AllChefsPage