import SectionHeader from "../components/SectionHeader"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Tooltip } from 'react-tooltip'


const SectionOrigin = () => {
    const [origin, setOrigin] = useState([])
    // console.log(data);
  
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_SERVER}/country`)
      .then(res=> res.json()
      .then(data => {
        const otherCountry = data.filter(country => country !== "Italian")
        setOrigin(otherCountry)
      })    
      )
      
    }, [])
   
  return (
    <section className="bg-sky-100 py-5 my-3 border-t-4 border-b-8 border-indigo-300  ">
    <SectionHeader >Find  world famous Recipes from other origin </SectionHeader>  
    <div  className="px-2 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:w-4/5 w-full mx-auto gap-3 mb-10 pb-8">
      {
        origin?.length > 0 && origin.map((coun, i) => <div data-tooltip-content= 'external page'  data-tooltip-id="other_recipe"   key={i} className="bg-violet-100 text-violet-600 font-semibold shadow-current py-3 shadow-md rounded-lg text-center " ><Link to={`/external-page/${coun}`}>{coun} </Link></div>) 
      }
    </div>
    
    <Tooltip id="other_recipe"  />
    </section>
  )
}

export default SectionOrigin