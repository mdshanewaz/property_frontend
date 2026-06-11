import { Link } from "react-router-dom";
import { Title } from "../../components/Title/Title";
import { Banner } from "../../components/Home/Banner/Banner";
import { Featured } from "../../components/Home/Featured/Featured";
import { UserAndProperty } from "../../components/Home/UserAndProperty/UserAndProperty";

export const Home = () => {
    Title ("");

    return (
        <div>
            <Banner />
            <Featured />
            <UserAndProperty />
        </div>
    );
}