import Api from "../../api/Api";
import CallRefresh from "../RefreshToken/RefreshToken";

export const IsAuthenticated = async () => {
    try {
        const response = await Api.post(
            'user/authenticated/',
            {},
            { withCredentials : true }
        )

        // console.log('Authenticated', response.data.Authenticated);
        return response.data.Authenticated;
    }
    catch (error) {
        if (error.response && error.response.status === 401) {
            const refreshed = await CallRefresh(error, () => {
                Api.post(
                    'user/authenticated/',
                    {},
                    { withCredentials: true }
                );
                if (refreshed) return true;
            })
        }
        // console.log(error.response);
        return false;
    }
} 