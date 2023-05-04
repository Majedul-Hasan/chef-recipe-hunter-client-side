import { useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"

const ProfilePage = () => {
  const {user} = useContext(AuthContext)
  const {email, displayName, photoURL} = user

  
  return (
    <div className="w-56 mx-auto my-6 p-6 bg-slate-200">
      <div className="flex flex-col items-center justify-center  gap-3">
        <div > 
          <img src={photoURL} alt=""/> 
        </div>
        <div className="w-full text-xl font-semibold  text-center">
          <p >{displayName}</p>
        </div>
        <div className="text-center">
          <p>{email}</p>
        </div>
      </div>


      
       </div>
  )
}

export default ProfilePage