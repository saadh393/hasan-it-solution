/*  
💥 Title : Sidebar
📃 Description : Side bar of dashboard
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../../../App";
import logo from "../../../images/logo.png";
import AdminMenus from "../../AdminArea/AdminMenus/AdminMenus";
import ClientMenu from "../../ClientArea/ClientMenu/ClientMenu";
import "./Sidebar.css";

const Sidebar = () => {
  const [user, setUser] = useContext(userDataContext);
  return (
    <>
      <div>
        <div className="branding">
          <Link to="/">
            <img src={user.photo} />
            <h3>{user.name}</h3>
          </Link>
          {/* @TODO Logout Icon */}
          <h6> Logout </h6>
        </div>

        <div className="sidebar-menu">
          <ClientMenu />
          {/* <AdminMenus /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
