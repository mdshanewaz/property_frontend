import { Link } from "react-router-dom";
import { Title } from "../../components/Title/Title";
import { ProfileBody } from "../../components/Profile/ProfileBody";

export const Profile = () => {
    Title (" | Profile");
    
    return (
        <ProfileBody />
    )
}