import { useLoaderData } from "react-router-dom";
import SectionHeroBlogPage from "../components/SectionHeroBlogPage";
import SectionHeader from "../components/SectionHeader";
import { AiFillEye, AiFillLike } from "react-icons/Ai";
import { useState } from "react";


const BlogDetailPage = () => {
    const blog = useLoaderData()
    const {photoUrl, likes, description, views, title } = blog
    // console.log(blog);
    const [vote, setVote] =useState(likes)

  return (
    <>
    <SectionHeroBlogPage bannerUrl ={photoUrl} />
    <div className="w-4/5 mx-auto  my-8">
    <div className="underline">
   
    <SectionHeader>{title}</SectionHeader>
    </div>
    
    <div className="flex justify-end w-full items-center border-b-2 border-blue-400" >
      <p className="my-2 text-lg flex items-center "><span className="text-violet-600 font-bold  py-1 px-2 rounded-md "><AiFillLike/></span><span className=" text-violet-600 font-bold py-1 px-2 rounded-md ">  {vote} </span></p>
      <span className="text-lg font-bold" >||</span>

      <p className="my-2 text-lg flex items-center justify-end md:pr-4"><span className=" text-violet-600 font-bold py-1 px-2 rounded-md ">  {views } </span><span className="text-violet-600 font-bold  py-1 px-2 rounded-md "><AiFillEye/></span></p>
    </div> 
    <div className="flex flex-col md:flex-row mt-8 mb-4 py-5 gap-8">
        <p className="text-lg flex-1">{description}</p>


        
        <div className="flex-1 p-5 border-4 rounded-2xl">
            <img src={photoUrl} alt="" className="rounded-2xl" />
        </div>
    </div>
    <div className="flex justify-center  items-center ">
        <button className="bg-indigo-500 text-white py-2 px-4 text-xl font-semibold rounded-md " onClick={()=>setVote(x=>x+1)}>Like</button>
        
         </div>



    </div>
    </>
  )
}

export default BlogDetailPage