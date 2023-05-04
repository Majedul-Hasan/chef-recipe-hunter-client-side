import { useLoaderData } from "react-router-dom"
import CardBlog from "../components/CardBlog"
import SectionHeader from "../components/SectionHeader"

import SectionHeroBlogPage from "../components/SectionHeroBlogPage"


const BlogPage = () => {
  const blogs = useLoaderData()

    
  return (
    <>
    <SectionHeroBlogPage />
    <SectionHeader >Programming Blogs

    </SectionHeader>
    <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1  w-4/5 mx-auto gap-9 my-8">
         {
          blogs         
          ?.map((blog)=> <CardBlog key={blog._id} blog = {blog}  />
         )
        } 
           
      </div>


    </>
  )
}

export default BlogPage