import { Link} from "react-router-dom"
import CardChef from "../components/CardChef"
import SectionHeader from "../components/SectionHeader"
import SectionHero from "../components/SectionHero"

import 'react-tooltip/dist/react-tooltip.css'
import SectionCategory from "../components/SectionCategory"
import SectionOrigin from "./SectionOrigin"
import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"


const HomePage = () => {
  const [data, setData]= useState()
  const [isLoading, setIsLoading] = useState(true)



useEffect(() => {
  fetch(`${import.meta.env.VITE_API_SERVER}/chefsProfile-all/6`)
  .then(res=>res.json()
  .then(data => {
    setIsLoading(false)
    setData(data)
  })
  )  
}, [])
 
// console.log(category);

  return (
    <>
    {
      isLoading ? <Spinner /> :  <>
      <SectionHero pageName = 'your favorite Italian recipes' pageStory = 'search your favorite recipes by  world famous chefs' />
      <SectionHeader >Find  world famous chefs recipes</SectionHeader>
      <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-full md:w-4/5 mx-auto gap-9 my-8">
        {
          data         
          ?.map((ch)=> <CardChef key={ch._id} chef = {ch}  />
         )
        }
           
      </div>
      <div className="card-actions justify-center mt-2 py-3">
      <Link to='/all-chefs'  className="btn border-0 bg-orange-400 hover:bg-blue-500 "> All chefs of Italian recipe </Link>
    </div>
     {/* category */}
     <SectionCategory />
    {/* origin section external page */}
    <SectionOrigin />
    </>

    }
    </>
   
  )
}

export default HomePage