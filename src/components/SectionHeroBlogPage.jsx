


// eslint-disable-next-line react/prop-types
const SectionHeroBlogPage = ({pageName, pageStory}) => {
  return (
    <section className="page_header bg-cover bg-center py-20 min-h-[50vh] text-white flex items-center justify-center" style={{backgroundImage: 'url("https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.jpg")'}}>
    <div className="">
        <div className="flex flex-row ">
        <div className=" md:w-full text-center">
            <h2 className="uppercase lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold my-3">{pageName}</h2>
            <p className="lg:text-2xl md:text-xl sm:text-sm text-xs">{pageStory}</p>
        </div>
        </div>
    </div>
    </section>
  )
}

export default SectionHeroBlogPage