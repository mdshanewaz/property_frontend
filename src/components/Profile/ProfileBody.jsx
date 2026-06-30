import { Outlet } from "react-router-dom";
import { ProfileNav } from "./ProfileNav/ProfileNav";
import "./ProfileBody.css";
import { FaBars, FaX  } from "react-icons/fa6";
import { useState } from "react";

export const ProfileBody = () => {

  const [menuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
        setMenu(prev => !prev);
    } 
  
  return (
    <>
      <div className="contain">
        <div className="ham-burger">
            <button onClick={toggleMenu}>
              { menuOpen ? <FaX /> : <FaBars />}
            </button>
        </div>
        <div className={`profile_menu ${menuOpen ? "active" : ""}`}>
          < ProfileNav />
        </div>
        <div className="profile_content">
          <Outlet />
        </div>
      </div>
    </>
  );
}