import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
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
        <li> <button className="bg-orange-400 px-7"><Link  to='/login'>Login</Link></button> </li>
      </ul>
    </div>
  </div>
  ) 
}

export default Header