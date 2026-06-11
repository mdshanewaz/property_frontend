import { Outlet } from "react-router-dom";
import { ProfileNav } from "./ProfileNav/ProfileNav";
import "./ProfileBody.css";

export const ProfileBody = () => {
  
  return (
    <>
      <div className="contain">
        <div className="profile_menu">
          < ProfileNav />
        </div>
        <div className="profile_content">
          <Outlet />
        </div>
      </div>
    </>
  );
}