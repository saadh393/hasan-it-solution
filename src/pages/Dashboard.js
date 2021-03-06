/*  
💥 Title : Dashboard
📃 Description : Dashboard
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { userDataContext } from "../App";
import Admin from "../component/AdminArea/Admin";
import Client from "../component/ClientArea/Client";
import Sidebar from "../component/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  const [user, setUser] = useContext(userDataContext);
  console.log(user);
  return (
    <>
      <Row style={{ margin: "0px", height: "100vh" }}>
        <Col md={3} style={{ padding: "0px" }} className="sidebar">
          <Sidebar />
        </Col>
        <Col md={9} style={{ background: "#f4f7fc" }}>
          {user.role === "admin" ? <Admin /> : <Client />}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
