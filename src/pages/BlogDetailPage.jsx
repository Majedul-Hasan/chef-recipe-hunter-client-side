import { useLoaderData } from "react-router-dom";


const BlogDetailPage = () => {
    const blog = useLoaderData()
    console.log(blog);

  return (
    <div>BlogDetailPage</div>
  )
}

export default BlogDetailPage