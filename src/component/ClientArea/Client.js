/*  
💥 Title : Client
📃 Description : Client 
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Book from "./Book/Book";
import BookingList from "./BookingList/BookingList";
import Rateus from "./Rateus/Rateus";

/*  🔥 React Dependencies 🔥 */

const Client = () => {
  return (
    <>
      <div className="py-5 px-3">
        <Switch>
          <Route path="/dashboard/book/">
            <Book />
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
