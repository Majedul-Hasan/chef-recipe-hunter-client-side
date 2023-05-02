import {  toast } from 'react-toastify';

const ContactPage = () => {


    const subscriptionHandler = ()=>{
        toast("Wow! thanks.");
    }




  return (
    <div className="hero  bg-base-200 py-10">
    <div className="hero-content flex-col lg:flex-row-reverse  w-4/5 mx-auto gap-4">
      <div className="text-center lg:text-left mx-7 px-6">
        <h1 className="text-5xl font-bold">stay in touch!!!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" />
          </div>
          
          <div className="form-control mt-6">
            <button onClick={subscriptionHandler} className="btn btn-primary">subscribe news latter </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default ContactPage