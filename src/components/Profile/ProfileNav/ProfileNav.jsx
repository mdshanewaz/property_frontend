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
                    <h2 className="profile_user">Welcome { userProfile.owner }!</h2>
                  </>
              )
              : (
                <p>Loading...</p>
              )}
              <nav>
                <ul>
                  <li><Link to='assets'><TbBuildingEstate className="nav_link_icon" /> Assets</Link></li>
                  <li><Link to='rents'><TbBuildingEstate className="nav_link_icon" /> Rents</Link></li>
                  <li><Link to='inbox'><FaRocketchat className="nav_link_icon" /> Inbox</Link></li>
                  <li><Link to='notification'>< FaRegBell className="nav_link_icon" /> Notification</Link></li>
                  <li><Link to='addasset'><MdAddHomeWork className="nav_link_icon" /> Add Asset</Link></li>
                  <li><Link to='giverent'><MdGroupAdd className="nav_link_icon" /> Give Rent</Link></li>
                  <li><Link to='about'><CgProfile className="nav_link_icon" /> About</Link></li>
                  <li><Link to='edit'><ImProfile className="nav_link_icon" /> Edit Profile</Link></li>
                  <li><Link to='logout'><IoMdLogOut className="nav_link_icon" /> Logout</Link></li>
                </ul>
              </nav>    
            </aside>
        </>
    );
}