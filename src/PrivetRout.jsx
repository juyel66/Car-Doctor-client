import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <progress className="progress text-center mt-20 mb-20 ml-[550px] w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    
    return <Navigate to='/login' replace></Navigate>
};

export default PrivetRout;