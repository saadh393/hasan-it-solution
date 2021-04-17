/*  
💥 Title : CardBooking
📃 Description : Card of Each Booking       
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card, Col } from "react-bootstrap";
import img from "../../../images/avater.png";

let CardBooking = ({ data }) => {
  let actionTheme = "";
  if (data.action === "On Going") {
    actionTheme = "on_going";
  } else if (data.action === "Pending") {
    actionTheme = "pending";
  } else if (data.action === "Done") {
    actionTheme = "done";
  }
  return (
    <>
      <Col md={5}>
        <Card className="shadow-sm mt-4">
          <div className="bookingList-card">
            <img src={`data:image/jpeg;base64,${data.imageDatta.img}`} />
            <div className={`statusBtn ${actionTheme}`}>{data.action}</div>
            <h5>{data.serviceTitle}</h5>
            <p>{data.serviceDescription.slice(0, 180) + "..."}</p>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default CardBooking;
