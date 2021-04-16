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
        <Link to="/dashboard/book/">Book</Link>
        <Link to="/dashboard/bookinglist/">Booking List</Link>
        <Link to="/dashboard/review/">Review</Link>
      </ul>
    </>
  );
};

export default ClientMenu;
