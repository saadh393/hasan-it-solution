/*  
💥 Title : WorkStat
📃 Description : WorkStat
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col, Row } from "react-bootstrap";
import "./WorkStat.css";

const WorkStat = () => {
  return (
    <section className="mt-5 py-5">
      <Row>
        <Col className="d-flex justify-content-end">
          <div className="circle-wrapper">
            <div className="main-circle">
              <h1>10</h1>
              <p>Years of Experience</p>
            </div>
            <div className="secondary-circle"></div>
          </div>
        </Col>
        <Col>
          <div className="d-flex stat-details">
            <h1>2K</h1>
            <h4>Apps Developed</h4>

            <br />

            <h1>30</h1>
            <h4>Consultants</h4>

            <br />

            <h1>160</h1>
            <h4>Employers</h4>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WorkStat;
