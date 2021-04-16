/*  
💥 Title : CardWhyChoose
📃 Description : CardWhyChoose
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

import { Card, Col } from "react-bootstrap";

/*  🔥 React Dependencies 🔥 */

const CardWhyChoose = () => {
  return (
    <>
      <Col md={4} className="my-3">
        <div className="d-flex" style={{ gap: "10px" }}>
          <div className="left">1</div>
          <div className="right">
            <h3>High Quality Hardware</h3>
            <p>We use top-notch hardware to develop the most efficient apps for our customers</p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CardWhyChoose;
