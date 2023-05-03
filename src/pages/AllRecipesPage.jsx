import { Link, Outlet} from "react-router-dom"
import SectionHero from "../components/SectionHero"
import SectionHeader from "../components/SectionHeader"



const AllRecipesPage = () => {

    const alpha= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return (
    <div>
        <SectionHero pageName='here all Italian foods you can have' pageStory='search your favorite recipes by tags or Alphabet ' ></SectionHero>
            <SectionHeader>find recipe by Alphabet</SectionHeader>
        <div className="mt-7 w-4/5 flex flex-wrap justify-center mx-auto">
        {
            alpha.map((alp , i) => <Link to={`/recipes/alphabetical/${alp}`} className="bg-indigo-100 text-indigo-500 hover:bg-indigo-500 uppercase font-bold hover:text-indigo-50 py-2 px-4 my-4 mx-2 " key={i}>{alp}</Link>)
        }
        </div>
        <h3 className="text-xs block text-center text-gray-400/60 mb-5">***some information may have been missing for full detail make sure visiting view recipe page*** </h3>
        <div className="border-t-4 border-b-4 border-indigo-400 py-8 my-8">
            <Outlet />


        </div>
            <SectionHeader>find recipe by Alphabet</SectionHeader>
        <div className="my-7 w-4/5 flex flex-wrap justify-center mx-auto">
        {
            alpha.map((alp , i) => <Link to={`/recipes/alphabetical/${alp}`} className="bg-indigo-100 text-indigo-500 hover:bg-indigo-500 uppercase font-bold hover:text-indigo-50 py-2 px-4 my-4 mx-2 " key={i}>{alp}</Link>)
        }
        </div>



    </div>
  )
}

export default AllRecipesPage