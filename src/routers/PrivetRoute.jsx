import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../providers/AuthProviders"
import Spinner from "../components/Spinner"


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext)
    const location = useLocation()

    if(isLoading){
        return <Spinner animation="border" variant="warning" />
    }
    if (user) {
        return children
    } else {
        return  <Navigate to="/login" state={{from : location}} replace     />
    }  
}

export default PrivetRoute