/*  
💥 Title : CardBooking
📃 Description : Card of Each Booking       
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card, Col } from "react-bootstrap";
import img from "../../../images/avater.png";

const CardBooking = ({ data }) => {
  return (
    <>
      <Col md={5}>
        <Card className="shadow-sm mt-4">
          <div className="bookingList-card">
            <div className="d-flex justify-content-between align-items-center ">
              <img src={img} />
              <div className="statusBtn done">Pending</div>
            </div>
            <h5> Anti Aged Face Treatment</h5>
            <p>
              Asynchronous functions are a good and bad thing in JavaScript.Asynchronous functions are a good and bad
              thing in JavaScript.Asynchronous functions are a good and bad thing in JavaScript.
            </p>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default CardBooking;
