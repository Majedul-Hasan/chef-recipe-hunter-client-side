

const OurStory = () => {
  return (
   <section className="py-14 ">
  <div className=" w-7/12 mx-auto">
    <div className="flex flex-row w-full gap-5 ">
      <div className="w-5/12 m-5 ">
        <img  src="https://demo.web3canvas.com/themeforest/tomato/img/about.png" className="w-full" alt />
      </div>
      <div className=" text-left w-6/12 ml-4 ">
        <h2 className="text-left mt-6 text-4xl font-semibold  ">Our Story</h2>
        {/*  eslint-disable-next-line react/no-unescaped-entities */}
        <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage</p>
        <a className="btn bg-orange-400 outline-none border-0 my-4" role="button" href="#menu">See Our Menu</a>
      </div>
    </div>
  </div>
</section>

  )
}

export default OurStory