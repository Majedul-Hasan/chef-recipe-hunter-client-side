/* eslint-disable react/no-unescaped-entities */

import { useParams } from "react-router-dom"
import {TiWarning} from 'react-icons/Ti';



const ExternalPage = () => {
    const {origin} = useParams()
    // console.log(params);
  return (
    <div  >
        <div className="my-8 flex justify-center items-center flex-col text-xl gap-3 ">
            <div className="flex text-6xl text-orange-600 justify-center"> 
                 <TiWarning/>
            </div>
            <p className="flex items-center justify-center text-2xl"><span>You are going to leave this site.....  </span> </p>
            <p>Press "OK" to continue </p>
            <div className="bg-blue-500 py-2 px-5 text-white "><a href={`https://b7a10-chef-recipe-hunter-server-side-majedul-hasan.vercel.app/origin/${origin}`}>OK</a> </div>

        </div>
        
        
    </div>
  )
}

export default ExternalPage