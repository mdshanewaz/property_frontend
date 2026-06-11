import Api from "../../api/Api";

// Use refresh token to get net session and refresh token
export const RefreshToken = async () => {
    try {
        const response = await Api.post(
            "user/token/refresh/",
            {}, // Not giving anything 
            { withCredentials:true } // For cookies
        ); 
        // console.log(response);    
        return response.data;
    }
    catch (error) {
        return false;
    }
}

// Call refresh token when session token is expried
async function CallRefresh (error, func) {
    if (error.response && error.response.status === 401) {
        const tokenRefreshed = await RefreshToken();

        if (tokenRefreshed) {
            const retryResponse = await func();
            return retryResponse.data;
        }
    }
    return false 
}

export default CallRefresh;

// OTP validation temporary token
export const teporary = async () => {
    try {
        const response = await Api.post(
            "user/register/",
            {}, // Not giving anything 
            { withCredentials:true } // For cookies
        );  
        return response.data;   
    }
    catch(error) {
        return false;
    }
}