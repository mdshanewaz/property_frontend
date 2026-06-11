import { useLocation } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { IsAuthenticated } from "../../components/IsAuthenticated/IsAuthenticated";
import { Signout } from "../../components/Logout/LogoutBody/LogoutBody";


const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    const get_authenticated = async () => {
        // if (authenticated) return;
        try{
            const success = await IsAuthenticated();
            console.log("Authentication result:", success);
            setIsAuthenticated(success);
            console.log('Authenticated state',authenticated);
        } 
        catch(error){
            // console.log(error);
            setIsAuthenticated(false);
        }
        finally {
            setIsLoading(false);
        }
    }

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = async () => {
        await Signout();
        setIsAuthenticated(false);
    };


    useEffect(() =>{
        // console.log("isAuthenticated changed:", isAuthenticated);
        get_authenticated();
        console.log("isAuthenticated changed:", authenticated);
    }, [location.pathname, get_authenticated().success, authenticated]);

    return (
        <AuthContext.Provider value={{authenticated, isLoading, logout, login}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);