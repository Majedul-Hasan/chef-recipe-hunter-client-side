import Leaflet from "../components/Leaflet"
import OurStory from "../components/OurStory"
import SectionHero from "../components/SectionHero"


const AboutUsPage = () => {
  return (
    <div>
        <SectionHero pageName='ABOUT US' pageStory = 'Read our Story, How we started and about the Team' />
        <OurStory />
          <h2 className=" mt-6 text-4xl font-semibold  text-center mb-10  "> find us on Map </h2>
            <div id="leaflet-map"style={{height: '70vh'}}>
          <Leaflet/>

        </div>
        

       

    </div>
  )
}

export default AboutUsPage