/*  
💥 Title : Dashboard
📃 Description : Dashboard
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col, Row } from "react-bootstrap";
import Admin from "../component/AdminArea/Admin";
import Client from "../component/ClientArea/Client";
import Sidebar from "../component/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Row style={{ margin: "0px" }}>
        <Col md={3} style={{ padding: "0px" }}>
          <Sidebar />
        </Col>
        <Col md={9} style={{ background: "#f4f7fc" }}>
          <Client />
          {/* <Admin /> */}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
