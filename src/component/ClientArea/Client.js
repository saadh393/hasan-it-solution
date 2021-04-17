/*  
💥 Title : Client
📃 Description : Client 
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Route, Switch } from "react-router-dom";
import Book from "./Book/Book";
import BookingList from "./BookingList/BookingList";
import Rateus from "./Rateus/Rateus";

const Client = () => {
  const stripePromise = loadStripe(
    "pk_test_51Igso4Dk6nSkfu8eUAMOqu3PfJRMLKKhg4ROs2Uo9LUO3mLhN56EAha5JGxKvL17K8Axked6Vj9BmWV6LdK5SIza00CFOm7xJg"
  );

  return (
    <>
      <div className="py-5 px-3">
        <Switch>
          <Route path="/dashboard/book/:serviceId">
            <Elements stripe={stripePromise}>
              <Book />
            </Elements>
          </Route>

          <Route path="/dashboard/bookinglist/">
            <BookingList />
          </Route>

          <Route path="/dashboard/review/">
            <Rateus />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Client;
