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
            <img src={user.photo} style={{ borderRadius: "100%", border: "3px sold yellow" }} />
            <h3 className="mt-4">{user.name}</h3>
            <h6>Acting As {user.role}</h6>
          </Link>
        </div>

        <div className="sidebar-menu">{user.role === "admin" ? <AdminMenus /> : <ClientMenu />}</div>
      </div>
    </>
  );
};

export default Sidebar;
