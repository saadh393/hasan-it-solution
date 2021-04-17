/*  
💥 Title : BookingList
📃 Description : Booking List
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { userDataContext } from "../../../App";
import CardBooking from "../CardBooking/CardBooking";
import "./BookingList.css";

const BookingList = () => {
  const [user] = useContext(userDataContext);
  const [booklist, setBookList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/booklist", { email: user.email }).then(({ data }) => {
      setBookList(data);
    });
  }, []);

  return (
    <>
      <section>
        <h2>Your Bookings </h2>
        <Row>
          {/* <CardBooking /> */}
          {booklist.map((booking) => (
            <CardBooking data={booking} />
          ))}
        </Row>
      </section>
    </>
  );
};

export default BookingList;
