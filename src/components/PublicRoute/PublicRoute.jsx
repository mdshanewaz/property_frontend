import React from 'react';
import { useAuthContext } from "../../context/Auth/AuthProvider"
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
    const { authenticated, isLoading } = useAuthContext();
    
     if (isLoading) {
        return(
            <h1>Loading...</h1>
        )
    }
    
    if (!authenticated) {
        return children;
    }
    else {
        return <Navigate to="/" replace />
    }
}
