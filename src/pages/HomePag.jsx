import { Link, useLoaderData } from "react-router-dom"
import CardChef from "../components/CardChef"
import SectionHeader from "../components/SectionHeader"
import SectionHero from "../components/SectionHero"
import { useEffect, useState } from "react"
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const HomePage = () => {
  const data = useLoaderData()
  const [origin, setOrigin] = useState([])
  const [category, setCategory] = useState([])
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
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/recipes/category`)
    .then(res=> res.json()
    .then(data =>   setCategory(data))    
    )
    
  }, [])
console.log(category);
  


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
    <section className="bg-sky-100 py-5 my-3 border-t-4 border-b-8 border-indigo-300  ">
    <SectionHeader >Find  world famous Recipes from other origin </SectionHeader>  
    <div  className="px-2 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:w-4/5 w-full mx-auto gap-3 mb-10 pb-8">
      {
        origin?.length > 0 && origin.map((coun, i) => <div data-tooltip-content= 'external page'  data-tooltip-id="other_recipe"   key={i} className="bg-violet-100 text-violet-600 font-semibold shadow-current py-3 shadow-md rounded-lg text-center " ><a href={`https://b7a10-chef-recipe-hunter-server-side-majedul-hasan.vercel.app/origin/${coun}`} target="_blank" rel="noreferrer" >{coun} </a></div>) 
      }
    </div>
    
    <Tooltip id="other_recipe"  />


    </section>

    <section className="bg-green-100 py-5 my-3 border-t-4 border-b-8 border-indigo-300  ">
    <SectionHeader >Find Recipes by food category </SectionHeader>  
    <div  className="px-2 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:w-4/5 w-full mx-auto gap-3 mb-10 pb-8">
      {
        category?.length > 0 && category.map((cat, i) => <div key={i} className="bg-violet-100 text-violet-600 font-semibold shadow-current py-3 shadow-md rounded-lg text-center " ><Link to={`/recipes/category/${cat}`} target="_blank" rel="noreferrer" >{cat} </Link></div>) 
      }
    </div>
    
    


    </section>

 
   

    </>
  )
}

export default HomePage