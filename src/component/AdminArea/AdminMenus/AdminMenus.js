/*  
💥 Title : AdminMenus
📃 Description : Admin Area
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Link } from "react-router-dom";

const AdminMenus = () => {
  return (
    <>
      <ul>
        <Link to="/dashboard/orders/">Order List</Link>
        <Link to="/dashboard/addservice/">Add Service</Link>
        <Link to="/dashboard/makeAdmin/">Make Admin</Link>
        <Link to="/dashboard/manageservice/">Manage Services</Link>
      </ul>
    </>
  );
};

export default AdminMenus;
