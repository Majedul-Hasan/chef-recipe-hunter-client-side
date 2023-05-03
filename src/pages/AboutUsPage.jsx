import Leaflet from "../components/Leaflet"
import OurStory from "../components/OurStory"
import SectionHeader from "../components/SectionHeader"
import SectionHero from "../components/SectionHero"


const AboutUsPage = () => {
  return (
    <div>
        <SectionHero pageName='ABOUT US' pageStory = 'Read our Story, How we started and about the Team' />
        <OurStory />
        <SectionHeader >Find us by Map </SectionHeader>
         
            <div id="leaflet-map"style={{height: '70vh'}}>
          <Leaflet/>

        </div>
        

       

    </div>
  )
}

export default AboutUsPage