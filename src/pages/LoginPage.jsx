import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import SocialLogin from "../components/SocialLogin"
import { AuthContext } from "../providers/AuthProviders"



const LoginPage = () => {
  const {loginUser, setUser} = useContext(AuthContext)
  const [errorMsg, setErrorMsg] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleLogin = (e) => {
    e.preventDefault()
    const  formInput = e.target   
    const email = formInput.email.value
    const password = formInput.password.value
    setErrorMsg(null)
    console.table({ email, password});
    // console.log(errorMsg);
    loginUser(email, password)
    .then((res) => {
      setUser(res.user)
      navigate(from, { replace: true })
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
      <form onSubmit={handleLogin} >
      <h3 className="text-2xl font-bold my-7">Login</h3>
          <div className="form-control my-4">
            <label className="label "> 
            <input className="h-12 flex align-bottom border-b-2 border-opacity-20 w-full pl-2 pb-0 placeholder:text-gray-600" type="email" name="email" placeholder="Username or Email" />
            </label>
          </div>
          <div className="form-control my-4">
            <label className="label">
             
            <input type="password" placeholder="password" name= 'password' className="h-12 flex align-bottom border-b-2 border-opacity-20 w-full pl-2 pb-0 " />
            </label>
            <div className="flex justify-between px-2 my-4">
              <label className="label cursor-pointer">
                <input type="checkbox"  className="checkbox  checkbox-xs mr-1" />
                <span className="label-text">Remember me</span> 
              </label>
              <label className="label">
                <Link to='/forgot' className="label-text-alt link link-hover text-orange-400">Forgot password?</Link>
              </label>

            </div>
          </div>
          <div className="form-control mt-6 my-2">
            <button className="btn bg-orange-400 border-orange-400 hover:bg-white hover:text-orange-500 hover:border-orange-500 ">Login</button>
          </div> 
          {
          errorMsg &&  <p className="text-md text-red-400"> {errorMsg}        
        </p>
        }        
          <small className="text-md "> Do not have an account?
                <Link to='/register' className="label-text-alt link link-hover ml-1 text-orange-400">Create an account</Link>
          </small>
        </form>        

      </div>   
        <SocialLogin from ={from} />
    
        </div>
  )
}

export default LoginPage