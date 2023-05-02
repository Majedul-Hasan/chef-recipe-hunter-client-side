const PageNotFound404 = () => {
  return (
   <article className=" mb-20 max-w-3xl mx-auto flex flex-col items-center py-10">
  <div className="flex items-center text-[18rem] ">
    <div className=" mr-0"><span>4</span></div>
    <div className="text-transparent">
      <span>0</span>
      <div className=" my-8 mx-12 h-80 w-80 block rounded-full bg-cover bg-center bg-no-repeat -mt-96 " style={{backgroundImage: 'url("https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")'}} /> 
      {/* <div className=" my-8 mx-12 h-80 w-80 block rounded-full bg-cover bg-center bg-no-repeat -mt-96 " style={{backgroundImage: 'url("https://lemonlimes.loftocean.com/elementor/wp-content/uploads/sites/3/2022/10/akemy-mory-wxRf78iq2go-unsplash-2.jpg")'}} />  */}
    </div>
    <div className="ml-0"><span>4</span></div>
  </div>
  <header className=" relative text-center">
    <div>
      <h1 className="text-5xl font-medium my-3">Page Not Found</h1>
      <div className=" mt-8 text-lg font-normal max-w-2xl  ">
        <p>Sorry but we could not find the page you are looking for. It might have been moved or deleted. Perhaps searching can help.</p>
    </div>
    </div>
  </header>
</article>

  )
}

export default PageNotFound404