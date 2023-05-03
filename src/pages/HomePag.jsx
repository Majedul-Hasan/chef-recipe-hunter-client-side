import { useLoaderData } from "react-router-dom"
import CardChef from "../components/CardChef"
import SectionHeader from "../components/SectionHeader"
import SectionHero from "../components/SectionHero"
import { useState } from "react"

const HomePage = () => {
  const data = useLoaderData()
  const [allChefs, setAllChefs] = useState(false)
  console.log(data);

  // const alldataToSee = () =>{  
  //   setAllChefs(x=>!x)

  // } 
  const jobsToShow = allChefs ? data.length : 6



  return (
    <>
      <div>HomePage</div>
      <SectionHero pageName = 'your recipe home page' pageStory = 'search your favorite recipes by  world famous chefs' />
      <SectionHeader >Find  world famous chefs recipes</SectionHeader>
      <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-4/5 mx-auto gap-9 my-8">
        {
          data
          ?.filter((item, idx) => idx < jobsToShow)
          ?.map((ch)=> <CardChef key={ch._id} chef = {ch}  />
         )
        }
           
      </div>
    </>
  )
}

export default HomePage