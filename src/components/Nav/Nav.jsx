import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.png";
import { FaBars, FaX  } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { AuthContextProvider, useAuthContext } from "../../context/Auth/AuthProvider.jsx";


export const Nav = () => {
    const [menuOpen, setMenu] = useState(false);
    const { authenticated, isLoading, logout, login }  = useAuthContext();

    const toggleMenu = () => {
        setMenu(prev => !prev);
    } 

    const closeMenu = () => {
        setMenu(false);
    }

    // console.log("Nav:", authenticated, isLoading);

    // setInterval(() => {
    //     console.log("Nav:", authenticated );
    // }, 5000)

    return(
        <>
        <header>
            <nav className="navbar">
                <div className="container">
                    <NavLink to='/'><img className="navbar-brand" src={logo} onClick={closeMenu} alt="" /></NavLink>

                    <div>
                        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                            <li>
                                <NavLink to='/apartment' onClick={closeMenu}>Apartment</NavLink>
                            </li>
                            <li>
                                <NavLink to='/land' onClick={closeMenu}>Land</NavLink>
                            </li>
                            <li>
                                <NavLink to='/rent' onClick={closeMenu}>Rent</NavLink>
                            </li>
                            <li>
                                <NavLink to='/developers' onClick={closeMenu}>Developers</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Services' onClick={closeMenu}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' onClick={closeMenu}>Contact</NavLink>
                            </li>
                            { !authenticated ? (
                                <>
                                    <li>
                                        <NavLink className="nav-btn" to='/login' onClick={closeMenu}>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-btn" to='/register' onClick={closeMenu}>Register</NavLink>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <NavLink className="nav-btn" to='/profile' onClick={closeMenu}>Profile</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="ham-burger">
                        <button onClick={toggleMenu}>
                            { menuOpen ? <FaX /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
};