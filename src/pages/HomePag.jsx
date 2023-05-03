import { Link, useLoaderData } from "react-router-dom"
import CardChef from "../components/CardChef"
import SectionHeader from "../components/SectionHeader"
import SectionHero from "../components/SectionHero"
import { useEffect, useState } from "react"

const HomePage = () => {
  const data = useLoaderData()
  const [origin, setOrigin] = useState([])
  console.log(data);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/country`)
    .then(res=> res.json()
    .then(data => {
      const otherCountry = data.filter(country => country !== "Italian")
      setOrigin(otherCountry)
    })    
    )
    
  }, [])
  console.log(origin);
  


  return (
    <>
      <SectionHero pageName = 'your recipe home page' pageStory = 'search your favorite recipes by  world famous chefs' />
      <SectionHeader >Find  world famous chefs recipes</SectionHeader>
      <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-4/5 mx-auto gap-9 my-8">
        {
          data         
          ?.map((ch)=> <CardChef key={ch._id} chef = {ch}  />
         )
        }
           
      </div>
      <div className="card-actions justify-center mt-2 py-3">
      <Link to='/all-chefs'  className="btn border-0 bg-orange-400 hover:bg-blue-500 "> All chefs of Italian recipe </Link>
    </div>


    <SectionHeader >Find  world famous Recipes from other origin </SectionHeader>  
    <div  className="px-2 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:w-4/5 w-full mx-auto gap-3 mb-10 pb-8">
      {
        origin?.length > 0 && origin.map((coun, i) => <div key={i} className="bg-violet-100 text-violet-600 font-semibold shadow-current py-3 shadow-md rounded-lg text-center " ><a href={`https://b7a10-chef-recipe-hunter-server-side-majedul-hasan.vercel.app/origin/${coun}`}>{coun} </a></div>) 
      }
    </div>




    </>
  )
}

export default HomePage