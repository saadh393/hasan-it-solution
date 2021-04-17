/*  
💥 Title : Rateus
📃 Description : Rate Us
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

import axios from "axios";
import { useContext } from "react";
import { userDataContext } from "../../../App";

/*  🔥 React Dependencies 🔥 */

const Rateus = () => {
  const [user] = useContext(userDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    axios
      .post("http://localhost:4000/feedback", {
        username: user.name,
        email: user.email,
        photo: user.photo,
        feedback,
      })
      .then(({ data }) => {
        e.target.rest();
      });
  };

  return (
    <>
      <h2> Give Us Your valuable Feedback </h2>
      <form className="d-flex flex-column w-50 my-4" onSubmit={handleSubmit}>
        <label> Name </label>
        <input type="text" value={user.name} disabled className="form-control" />
        <br />
        <label>Your Feedback</label>
        <textarea name="feedback" className="form-control" required></textarea>
        <button type="submit" className="mt-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default Rateus;
