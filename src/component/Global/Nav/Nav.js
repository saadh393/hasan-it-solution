/*  
💥 Title : Hav
📃 Description : Preparing The Nav Bar
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../../images/logo.png";
import { useContext } from "react";
import { userDataContext } from "../../../App";

const Nav = () => {
  const [user] = useContext(userDataContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ width: "35px", height: "35px", marginRight: "10px" }} />
          Hasan IT Solutions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: "unset" }}>
          <ul className="navbar-nav mr-auto" style={{ gap: "40px" }}>
            <li className="nav-item">
              <Link to="/"> Home </Link>
            </li>

            <li className="nav-item">
              <Link to="/"> Services </Link>
            </li>

            <li className="nav-item">
              <Link to="/"> Our Team </Link>
            </li>

            <li className="nav-item">
              <Link to="/dashboard"> Admin </Link>
            </li>

            <li className="nav-item">
              {user.name ? <Profile name={user.name} photo={user.photo} /> : <Link to="/login"> Login </Link>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Profile = ({ name, photo }) => (
  <div className="d-flex">
    <img src={photo} style={{ width: "28px", borderRadius: "100%", marginRight: "5px" }} />
    {name}
  </div>
);

export default Nav;
