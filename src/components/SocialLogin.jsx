
import { FaGithub } from 'react-icons/fa';
import LogoGoogle from './icons/LogoGoogle';
import {  GithubAuthProvider, GoogleAuthProvider,   } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
const SocialLogin = ({from}) => {
  const { signInWithPopupForSocials, setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const GoogleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
const nnnn = from || '/'
  const handleAuth= (provider)=>{
    signInWithPopupForSocials(provider)
    .then(res => {
      const loggedinUser = res.user
      // console.log(loggedinUser);
      setUser(loggedinUser);
      navigate(nnnn, { replace: true })

    })
    .catch(err=>{
      console.error(err)
    })
  }

  return (
    <div className='w-10/12 mx-auto'>
        <div className="divider mb-10">OR</div>
        <button onClick={()=> handleAuth(githubProvider)} className="w-full my-2 border-orange-500 border-2 rounded-full py-2 flex  pl-3 items-center  hover:border-blue-600"> 
            <span className='text-black text-4xl w-12 '> <FaGithub  /></span>
            <span className='text-center flex-auto'>Continue with github</span> 
        </button>
            <br />
        <button onClick={()=> handleAuth(GoogleProvider)} className=" w-full my-2 border-orange-500 border-2 rounded-full py-2 flex  pl-3 items-center  hover:border-blue-400"> 
            <span className=' w-8'> <LogoGoogle /></span> 
            <span className='text-center flex-auto'>Continue with google </span>
        </button>
        </div>
  )
}

export default SocialLogin