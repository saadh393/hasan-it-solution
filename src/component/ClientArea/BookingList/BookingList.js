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
    axios.post("https://frozen-sierra-16673.herokuapp.com/booklist", { email: user.email }).then(({ data }) => {
      console.log(data);
      setBookList(data.purchases);
    });
  }, []);

  return (
    <>
      <section>
        <h2>Your Bookings </h2>
        <Row>
          {booklist.length ? booklist.map((booking, index) => <CardBooking data={booking} key={index} />) : <Loading />}
        </Row>
      </section>
    </>
  );
};

const Loading = () => (
  <div className="loader">
    <div className="spinner-border" style={{ width: "3rem", height: " 3rem", color: "red" }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
export default BookingList;
