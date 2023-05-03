import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { useContext, useState } from "react"
import { AuthContext } from "../providers/AuthProviders"
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Header = () => {
  const { user, logoutUser, setUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const  [profileVisible, setProfileVisible] = useState(false)

  
const handleLogout  = () => {
  logoutUser()
  .then(() => {
    setUser(null)
    setProfileVisible(false)
    navigate('/')

  })
}

  return (
    <div className="navbar w-4/5 mx-auto py-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/recipes'>All Recipes</Link></li>
        <li><Link to='/all-chefs'>All Chefs </Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </div>
    <div>

    <Link to='/' className=" normal-case text-xl">
      <img className="block w-24" src={logo} alt="your recipe" />
    </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/recipes'>All Recipes</Link></li>
        <li><Link to='/all-chefs'>All Chefs </Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        
    </ul>
  </div>
  <div className="navbar-end relative">
  {
          user ? 
        <button onClick={()=>setProfileVisible(x=>!x)} >{user?.photoURL ? <img className="w-7" data-tooltip-id="user-avatar" data-tooltip-content= {user?.displayName} src={user?.photoURL} /> : user?.displayName}</button> : <>
         <Link className="bg-orange-400  text-white sm:px-7 px-2  py-2 rounded-lg sm:mx-1 mx-0  hover:bg-orange-600" to='/login'>Login</Link>
         <Link className="bg-blue-400 text-white px-7 py-2 rounded-lg mx-1 hover:bg-blue-600 hidden sm:flex " to='/register'>Register</Link>
        </> 
        }
         {
    profileVisible ? <div className="w-48 absolute top-6 bg-slate-200  text-right "> <ul className="menu w-full items-end">
    <li className="flex justify-between w-full" > 
    <Link to='/profile'  >
      <span><img className="w-7" data-tooltip-id="user-avatar" data-tooltip-content= {user?.displayName} src={user?.photoURL} /></span>
      <span> {user?.displayName}</span>
      </Link></li>
    <li className="w-full text-center">
    <button className="bg-blue-400 text-white w-full flex justify-center  hover:bg-blue-600 rounded-lg"  onClick={handleLogout} >Logout</button>
    </li>
  </ul> </div>: null
   }
  </div>
   <Tooltip id="user-avatar" />
  
</div>
  ) 
}

export default Header