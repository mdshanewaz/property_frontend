import "./Banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faBullhorn, faKey } from "@fortawesome/free-solid-svg-icons";


export const Banner = () => {

    return (
        <>
        <section className="banner">
            <div className="container">
                <div className="banner-content"><h2>Find Your Dream Properties</h2></div>
                <div className="banner-content"><p>Browse Thounsands of Flats, Plots & Commercial Properties</p></div>
                <div className="banner-content">
                    <form action="">
                        <select>
                            <option value="">Flat</option>
                            <option value="">Land</option>
                            <option value="">Home</option>
                            <option value="">Commercial Space</option>
                        </select>
                        <select>
                            <option value="">Location</option>
                            <option value="">Dhaka</option>
                            <option value="">Chattogram</option>
                            <option value="">Khulna</option>
                        </select>
                        <input type="text" name="" id="" placeholder="Min Budget"/>
                        <input type="text" name="" id="" placeholder="Max Budget"/>
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </section>

        <section className="container">
            <div className="buy-sell-properties">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faHouseChimney} className="icons"/>
                    <h2>Buy a Property</h2>
                    <p>Find your perfect asset</p>
                </div>
                <div className="vertical-line"></div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faBullhorn} className="icons"/>
                    <h2>Sell Your Property</h2>
                    <p>List and sell easily</p>
                </div>
                <div className="vertical-line"></div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faKey} className="icons"/>
                    <h2>Rent a Property</h2>
                    <p>Find rentals effortlessly</p>
                </div>
            </div>
        </section>
        </>
    );
}