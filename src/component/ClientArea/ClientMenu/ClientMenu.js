/*  
💥 Title : ClientMenu
📃 Description : Client Menu Items
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Link } from "react-router-dom";

const ClientMenu = () => {
  return (
    <>
      <ul>
        <Link to="/dashboard/book/">Purchase</Link>
        <Link to="/dashboard/bookinglist/">Your Purchase List</Link>
        <Link to="/dashboard/review/">Rate Us</Link>
      </ul>
    </>
  );
};

export default ClientMenu;
