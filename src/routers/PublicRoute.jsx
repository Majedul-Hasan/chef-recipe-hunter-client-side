import { useContext } from "react"
import { AuthContext } from "../providers/AuthProviders"
import { Navigate, useLocation } from "react-router-dom"
import Spinner from "../components/Spinner"

// eslint-disable-next-line react/prop-types
const PublicRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext)
    const location = useLocation()

    
  const from = location.state?.from?.pathname || "/";
  console.log(from);

    if(isLoading){
        return <Spinner animation="border" variant="warning" />
    }
    if (!user) {
        return children
    } else {
        return  <Navigate to="/" state={{from : location}} replace     />
    }  
}

export default PublicRoute