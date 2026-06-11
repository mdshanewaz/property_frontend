import "./UserAndProperty.css"
import { Link } from "react-router-dom";

export const UserAndProperty = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="buyers">
                    <h2>For Buyers</h2>
                    <div className="under_line"></div>
                    <h3>Find Your Ideal Property</h3>
                    <p>Get Personalized Property Alerts</p>
                    <button><Link to='/buy' >Explore Now</Link></button>
                </div>
                <div className="sellers">
                    <h2>For Sellers</h2>
                    <div className="under_line"></div>
                    <h3>Find Your Ideal Property</h3>
                    <p>Get Personalized Property Alerts</p>
                    <button><Link to='/sell' >Explore Now</Link></button>
                </div>
            </div>
        </section>
        </>
    );
}