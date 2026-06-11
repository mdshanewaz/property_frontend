import Api from "../../../api/Api";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth/AuthProvider";

// Logout system call
export const Signout = async () => {

    try{
        const response = await Api.post(
        'user/logout/',
        {}, 
        {withCredentials:true}
        )
        return true;
    }
    catch (error) {
        return false;
    }
}


export const LogoutBody = () => {

    const navigate = useNavigate();
    const { logout } = useAuthContext();

    const handleLogout = async () => {
        await logout();
        navigate('/login');

        // const logout = await Signout();
        // if (logout) {
            // navigate('/login');
        // } 
    }

    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
            <h2>Are you sure about loging out?</h2>
            <button onClick={handleLogout}>Logout</button>
        <br />
        <br />
        <br />
        <br />
        </>
    );
}