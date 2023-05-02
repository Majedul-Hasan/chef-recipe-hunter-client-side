import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Header = () => {
  const { user, logoutUser, setUser} = useContext(AuthContext);
  const navigate = useNavigate()

  
const handleLogout  = () => {
  logoutUser()
  .then(() => {
    setUser(null)
    navigate('/')

  })
}

  return (
    <div className="navbar w-4/5 mx-auto py-0">
    <div className="flex-1">
      <a className="normal-case text-xl text-black ">
        <img className="block w-28" src={logo} alt="logo" />
      {/* <Logo color= '#4d4d4d' /> */}
      </a>
    </div>
    
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/recipes'>All Recipes</Link></li>
        <li><Link to='/all-chefs'>All Chefs </Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        {
          user &&
        <li ><Link to='/profile' >{user?.photoURL ? <img className="w-7" data-tooltip-id="user-avatar" src={user?.photoURL} /> : user?.displayName}</Link> </li>
        }
        {
           user ? <>
           <button className="bg-blue-400 text-white px-7 mx-1 hover:bg-blue-600 rounded-lg"  onClick={handleLogout} >Logout</button>
         </>
        : <>
        <li> <Link className="bg-orange-400  text-white px-7 mx-1 hover:bg-orange-600" to='/login'>Login</Link> </li>
        <li> <Link className="bg-blue-400 text-white px-7 mx-1 hover:bg-blue-600" to='/register'>Register</Link> </li>
        </> 
        }
         <Tooltip
        anchorSelect="#user-avatar"
        place="bottom"
        content={user?.displayName}
      />
        
      </ul>
    </div>
  </div>
  ) 
}

export default Header