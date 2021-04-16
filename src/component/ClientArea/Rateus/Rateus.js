/*  
💥 Title : Rateus
📃 Description : Rate Us
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const Rateus = () => {
  return (
    <>
      <h2> Give Us Your valuable Feedback </h2>
      <form className="d-flex flex-column w-50 my-4">
        <label> Name </label>
        <input type="text" value="User Name" disabled className="form-control" />
        <br />
        <label>Your Feedback</label>
        <textarea className="form-control" required></textarea>
        <button type="submit" className="mt-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default Rateus;
