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
import { Navbar, Nav as NNNN, NavDropdown } from "react-bootstrap";

const Nav = () => {
  const [user] = useContext(userDataContext);
  const dashboardPath = user.role ? (user.role === "admin" ? "orders" : "book") : "orders";

  return (
    <>
      <Navbar expand="lg" className="d-flex justify-content-between" style={{ backgroundColor: "rgb(76 74 74 / 43%)" }}>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} style={{ width: "35px", height: "35px", marginRight: "10px" }} />
            <span className="text-white">Hasan IT Solutions</span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NNNN className="ml-auto">
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
                <Link to={`/dashboard/${dashboardPath}`}> Admin </Link>
              </li>

              <li className="nav-item">
                {user.name ? <Profile name={user.name} photo={user.photo} /> : <Link to="/login"> Login </Link>}
              </li>
            </ul>
          </NNNN>
        </Navbar.Collapse>
      </Navbar>
      {/*
      <Navbar className="navbar navbar-expand-lg navbar-light  justify-content-between" expand="lg">
        
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
              <Link to={`/dashboard/${dashboardPath}`}> Admin </Link>
            </li>

            <li className="nav-item">
              {user.name ? <Profile name={user.name} photo={user.photo} /> : <Link to="/login"> Login </Link>}
            </li>
          </ul>
        </div>
      </Navbar> */}
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
