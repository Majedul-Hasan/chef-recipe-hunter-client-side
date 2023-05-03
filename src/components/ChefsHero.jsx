import { BsMagic } from "react-icons/Bs";
import { AiFillLike } from "react-icons/Ai";
import { GiHotMeal } from "react-icons/Gi";
import SectionHeader from "./SectionHeader";

// eslint-disable-next-line react/prop-types
const ChefsHero = ({name, bio, photoUrl, experience, likes, recipes}) => {
  return (
    <section className="page_header bg-cover bg-center py-20 min-h-[50vh] text-white flex flex-col md:flex-row justify-between" style={{backgroundImage: `url(${photoUrl})`}}>
    <div className="bg-black/40 mx-2 p-5">
        <div className="flex  items-end justify-start ">
        <div className=" md:w-full ">
            <h2 className="uppercase lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold my-3 border-b-4 border-blue-400 pb-4">{name}</h2>
            <p className= " lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs">{bio}</p>
        </div>
        </div>
    </div>
    <div className="bg-black/40 mx-2 p-5">
        <div className="flex  items-end justify-start ">
        
            {/* <h2 className="uppercase lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold my-3 border-b-4 border-blue-400 pb-4">{likes}</h2> */}
            {
              (experience || likes || recipes ) && <div className=" md:w-full py-9 ">
              <SectionHeader>Chef's info</SectionHeader>
            <p className= " my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex"><span className="font-bold text-white mr-1 "><BsMagic ></BsMagic></span> <span className="font-bold text-red-500 mr-3">{experience}</span>   years of experience</p>
            <p className= " my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex"><span className="font-bold text-white mr-1 "><AiFillLike ></AiFillLike></span> <span className="font-bold text-red-500 mr-3">{likes}</span> Likes </p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className= " my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex"><span className="font-bold text-white mr-1 "><GiHotMeal ></GiHotMeal></span> <span className="font-bold text-red-500 mr-3"> {recipes.length}</span>  popular Italian recipes </p>
              
            </div>
            }
            
        
        </div>
    </div>
    </section>
  )
}

export default ChefsHero