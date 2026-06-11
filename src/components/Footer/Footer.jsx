import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import logo from "../../assets/logo.png";

export const Footer = () => {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="footer_top">
                        <div className="footer_logo">
                           <Link to='/'><img className="navbar-brand" src={logo} /></Link> 
                        </div>
                        <div className="footer_top_links">
                            <h2>About Us</h2>
                            <Link to='/about'>About</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/faqs'>FAQs</Link>
                            <Link to='/privacy'>Privacy Policy</Link>
                        </div>
                        <div className="footer_contact">
                            <h2>Contact Us</h2>
                            <Link to='/contact'>Shoot a Message</Link>
                            <p>luxora@bd.com</p>
                            <p>+8801888333000</p>
                        </div>
                        <div className="footer_follow">
                            <h2>Follow Us</h2>
                            <h3>You can easily find us on modern social medias also.</h3>
                            <div className="footer_top_icons">
                                <Link><FaFacebookF /></Link>
                                <Link><FaLinkedinIn /></Link>
                                <Link><FaYoutube /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="footer_bottom_left">
                            <h3>© Luxsora Estate. All rights are reserved</h3>
                        </div>
                        <div className="footer_bottom_right">
                            <h3>Developed by <Link to='https://www.facebook.com/profile.php?id=61587365515146' target="_blank">QuantuMindLab</Link></h3>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};