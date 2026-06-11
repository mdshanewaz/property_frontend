import { useAuthContext } from "../../context/Auth/AuthProvider"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const auth = useAuthContext();
    const authenticated = auth.authenticated;                                       
    const isLoading= auth.isLoading;

    // console.log("PRIVATE ROUTE CONTEXT:", auth);

    if (isLoading) {
        return(
            <h1>Loading...</h1>
        )
    }
    
    if (authenticated) {
        return children;
    }
    else {
        return <Navigate to="/login" replace />
    }
}