import { Link, useLoaderData } from "react-router-dom"
import Leaflet from "../components/Leaflet"
import OurStory from "../components/OurStory"
import SectionHeader from "../components/SectionHeader"
import SectionHero from "../components/SectionHero"
import CardChef from "../components/CardChef"


const AboutUsPage = () => {
  const data = useLoaderData()

  return (
    <div>
        <SectionHero pageName='ABOUT US' pageStory = 'Read our Story, How we started and about the Team' />
        <OurStory />
        <SectionHeader >Find us by Map </SectionHeader>
         
            <div id="leaflet-map"style={{height: '57vh'}}>
          <Leaflet/>

        </div>
        <SectionHeader >Meet  world famous chefs</SectionHeader>
      <div className="grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 w-4/5 mx-auto gap-9 my-2">
        {
          data         
          ?.map((ch)=> <CardChef key={ch._id} chef = {ch}  />
         )
        }
           
      </div>
      <div className="card-actions justify-center mt-2 py-3">
      <Link to='/all-chefs'  className="btn border-0 bg-orange-400 hover:bg-blue-500 "> All chefs of Italian recipe </Link>
    </div>
        

       

    </div>
  )
}

export default AboutUsPage