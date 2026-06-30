import Api from "../../../api/Api";
import "./ProfileNav.css";
import CallRefresh from "../../RefreshToken/RefreshToken";
import { ImageURL } from "../../ImageURL/ImageURL";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { TbBuildingEstate } from "react-icons/tb";
import { FaRocketchat } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdAddHomeWork } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";


const GetProfile = async () => {
  try{
    const response = await Api.get(
      "user/profile/",
      { withCredentials:true }
    );
    return response.data;
  }
  catch(error){
    return await CallRefresh(error, () => Api.get("user/profile/",{ withCredentials:true}))
  }
}


export const ProfileNav = () => {

    const [userProfile, setUserProfile] = useState(null);
  
    useEffect(() => {
        const fetchProfile = async () => {
        const userInfo = await GetProfile();
        setUserProfile(userInfo);
    }

        fetchProfile();
    }, [])

    // console.log(userProfile);

    return (
        <>
            <aside className="profile_nav">
                { userProfile? (
                  <>
                    <img src={ ImageURL(userProfile.photo) } alt="Profile Picture" className="profile_img" />
                    <h2 className="profile_user">Welcome { userProfile.username }!</h2>
                  </>
              )
              : (
                <p>Loading...</p>
              )}
              <nav>
                <ul>
                  <li><NavLink to='assets'><TbBuildingEstate className="nav_link_icon" /> Assets</NavLink></li>
                  <li><NavLink to='rents'><TbBuildingEstate className="nav_link_icon" /> Rents</NavLink></li>
                  <li><NavLink to='inbox'><FaRocketchat className="nav_link_icon" /> Inbox</NavLink></li>
                  <li><NavLink to='notification'>< FaRegBell className="nav_link_icon" /> Notification</NavLink></li>
                  <li><NavLink to='addasset'><MdAddHomeWork className="nav_link_icon" /> Add Asset</NavLink></li>
                  <li><NavLink to='giverent'><MdGroupAdd className="nav_link_icon" /> Give Rent</NavLink></li>
                  <li><NavLink to='about'><CgProfile className="nav_link_icon" /> About</NavLink></li>
                  <li><NavLink to='edit'><ImProfile className="nav_link_icon" /> Edit Profile</NavLink></li>
                  <li><NavLink to='logout'><IoMdLogOut className="nav_link_icon" /> Logout</NavLink></li>
                </ul>
              </nav>    
            </aside>
        </>
    );
}