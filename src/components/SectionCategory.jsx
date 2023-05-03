import { useEffect, useState } from "react"
import SectionHeader from "./SectionHeader"
import { Link } from "react-router-dom"


const SectionCategory = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER}/recipes/category`)
    .then(res=> res.json()
    .then(data =>   setCategory(data))    
    )
    
  }, [])

  return (
    <section className="bg-green-100 py-5 my-3 border-t-4 border-b-8 border-indigo-300  ">
    <SectionHeader >Find Recipes by food category </SectionHeader>  
    <div  className="px-2 grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 sm:grid-cols-3 md:w-4/5 w-full mx-auto gap-3 mb-10 pb-8">
      {
        category?.length > 0 && category.map((cat, i) => <div key={i} className="bg-violet-100 text-violet-600 font-semibold shadow-current py-3 shadow-md rounded-lg text-center " ><Link to={`/recipes/category/${cat}`}  >{cat} </Link></div>) 
      }
    </div>
    
    


    </section>
  )
}

export default SectionCategory