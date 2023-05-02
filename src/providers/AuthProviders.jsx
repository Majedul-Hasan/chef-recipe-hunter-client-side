import { createContext,  useEffect, useState } from 'react';


import { createUserWithEmailAndPassword,signInWithEmailAndPassword , getAuth ,signInWithPopup, updateProfile, signOut, onAuthStateChanged  } from "firebase/auth";
import app from '../firebaseConfig/firebaseConfig';


export const AuthContext = createContext(null);
const Auth = getAuth(app)


// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    
const signInWithPopupForSocials = ( providerName) =>{
    return signInWithPopup(Auth, providerName)
  
  }
  const createUser = (email, password)=>{
    setIsLoading(true)
    return  createUserWithEmailAndPassword(Auth, email, password)
  
   }
  const loginUser = (email, password)=>{
    setIsLoading(true)
    return  signInWithEmailAndPassword (Auth, email, password)
   }
  const updateUser = (displayName, photoURL)=>{
    return  updateProfile(Auth.currentUser, {displayName, photoURL})
   }
  
  const logoutUser = ()=>{
    return  signOut(Auth)
   }
  
  
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (loggedonUser)=>{
      // console.log(loggedonUser);
      setUser(loggedonUser);
      setIsLoading(false)
    })
  return () => {
    unsubscribe()
  };
  }, []) 




    const authInfo = {
        user, 
        isLoading,
        signInWithPopupForSocials,
        setUser,
        createUser,
        updateUser, 
        loginUser,
        logoutUser,
  
      }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProviders