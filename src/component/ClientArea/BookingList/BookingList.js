/*  
💥 Title : BookingList
📃 Description : Booking List
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Row } from "react-bootstrap";
import CardBooking from "../CardBooking/CardBooking";
import "./BookingList.css";

const BookingList = () => {
  return (
    <>
      <section>
        <h2>Your Bookings </h2>
        <Row>
          <CardBooking />
          <CardBooking />
          <CardBooking />
        </Row>
      </section>
    </>
  );
};

export default BookingList;
