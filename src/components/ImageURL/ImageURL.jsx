import Api from "../../api/Api"

export const ImageURL = (path) => {
    return `${Api.defaults.baseURL}${path}`;
}