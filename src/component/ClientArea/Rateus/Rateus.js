/*  
💥 Title : Rateus
📃 Description : Rate Us
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { userDataContext } from "../../../App";

const Rateus = () => {
  const [user] = useContext(userDataContext);
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    const feedback = e.target.feedback.value;
    axios
      .post("https://frozen-sierra-16673.herokuapp.com/feedback", {
        username: user.name,
        email: user.email,
        photo: user.photo,
        feedback,
      })
      .then(({ data }) => {
        e.target.reset();
        setStatus(false);
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

        {status && (
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
        <button type="submit" className="mt-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default Rateus;
