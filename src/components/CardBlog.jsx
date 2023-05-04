import { Link } from "react-router-dom"

import { AiFillEye, AiFillLike } from "react-icons/Ai";


// eslint-disable-next-line react/prop-types
const CardBlog = ({blog}) => {
    const {_id, title,  main, photoUrl, likes, views} = blog ||{}
   


  return (
    <div className="card w-full  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">  
    <img src={photoUrl} alt={title} className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl border-b-2 flex pb-3 justify-center">{title}</h2>
    <p className="my-2 text-lg">{main} ...<Link className="text-blue-500 underline" to={`/blogs/${_id}`}>read more</Link></p>
    <div className="flex justify-between w-full" >
      <p className="my-2 text-lg flex items-center "><span className="text-violet-600 font-bold  py-1 px-2 rounded-md "><AiFillLike/></span><span className=" text-violet-600 font-bold py-1 px-2 rounded-md ">  {likes} </span></p>

      <p className="my-2 text-lg flex items-center justify-end md:pr-4"><span className="text-violet-600 font-bold  py-1 px-2 rounded-md "><AiFillEye/></span><span className=" text-violet-600 font-bold py-1 px-2 rounded-md ">  {views } </span></p>
    </div>
    
    
    
    <div className="card-actions justify-center mt-2 py-3">
      <Link to={`/blogs/${_id}`}  className="btn border-0 bg-orange-400 hover:bg-blue-500 ">Read full article</Link>
    </div>
  </div>
</div>
  )
}

export default CardBlog