import { Link } from "react-router-dom"

import { useContext, useState } from "react"
import { AuthContext } from "../providers/AuthProviders"
import SocialLogin from "../components/SocialLogin"


const RegisterPage = () => {
  const [errorMsg, setErrorMsg] = useState(null)

  const { createUser, updateUser, setUser} = useContext(AuthContext)



  const handleSignUp = (e) => {
    e.preventDefault()
    setErrorMsg(null)
    const  formInput = e.target
    const name = formInput.name.value
    const photoUrl = formInput.photo.value
    const email = formInput.email.value
    const password = formInput.password.value
    const confirm = formInput.confirm.value
    const terms = formInput.terms.checked
   
    // const displayName = 
    console.log(errorMsg);
    console.table({name, email, password, confirm, terms});
    if(password !== confirm) {
      setErrorMsg('password not matched')
      return
    }
    if(password.length < 6) {
      setErrorMsg('password should be at least 6 characters')
      return
    }
    if(!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setErrorMsg('please enter a valid email address')
      return
    }
    if(!terms){
      setErrorMsg('please accept terms before submitting')
      return
    }
    console.log(errorMsg);
    createUser(email, password)
    .then(res =>{
      const loggedUser = res.user
      console.log(loggedUser);      
      setUser(loggedUser);    
      updateUser( name, photoUrl)
      formInput.reset()
    })
    .catch(error =>{ 
      // const errorCode = error.code;
    const errorMessage = error.message;
      setErrorMsg( errorMessage )
    })
  }


  return (
    <div className=" w-2/5 mx-auto my-20 ">
      <div className="border-[1px] border-solid border-gray-400p-4 rounded-md p-8 mb-10">
      <form onSubmit={handleSignUp}>
      <h3 className="text-2xl font-bold my-7">Create an account</h3>
          <div className="form-control my-4">
            <label className="label "> <input className="h-12 flex align-bottom border-b-2 border-opacity-20 w-full pl-2 pb-0 placeholder:text-gray-600" type="text" name="name" placeholder="Name" />
            </label>
          </div>
          <div className="form-control my-4">
            <label className="label "> <input className="h-12 flex align-bottom border-b-2 border-opacity-20 w-full pl-2 pb-0 placeholder:text-gray-600" type="text" name="photo" placeholder="your photo url" />
            </label>
          </div>
          <div className="form-control my-4">
            <label className="label "> <input className="h-12 flex align-bottom border-b-2 border-opacity-20 w-full pl-2 pb-0 placeholder:text-gray-600" type="text" name="email" placeholder="Email" />
            </label>
          </div>
          <div className="form-control my-4">
            <label className="label ">  <input type="text" name="password" placeholder="password" className="h-12 flex align-bottom border-b-2 border-opacity-20 w-full pl-2 pb-0 " />
            </label>
          </div>
          <div className="form-control my-4">
            <label className="label">
             
            <input type="text" placeholder="confirm password" name="confirm" className="h-12 flex align-bottom border-b-2 border-opacity-20 w-full pl-2 pb-0 " />
            </label>
            </div>
            <div className="flex justify-between px-2 my-4">
             
            <label className="label cursor-pointer">
                <input type="checkbox" name="terms"  className="checkbox  checkbox-xs mr-1" />
                <span className="label-text">accept <Link className="text-blue-600 underline" to='/terms'>terms</Link> </span> 
              </label>

            </div>
          
          <div className="form-control mt-6 my-2">
            <button className="btn bg-orange-400 border-orange-400 hover:bg-white hover:text-orange-500 hover:border-orange-500 ">Login</button>
          </div>
          <small className="text-md "> Already have an account?
                <Link to='/login' className="label-text-alt link link-hover ml-1 text-orange-400">Login</Link>
          </small>
        </form>   
      </div>   
        <SocialLogin />
    
        </div>
  )
}

export default RegisterPage