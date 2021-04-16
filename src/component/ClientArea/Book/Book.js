/*  
💥 Title : Book
📃 Description : Book 
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userDataContext } from "../../../App";

const Book = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [user] = useContext(userDataContext);

  return (
    <>
      <section>
        <h2> Booking Area </h2>
        <Card className="p-4 mt-4">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column" style={{ gap: "20px" }}>
              <div>
                <h6>Full Name</h6>
                <input
                  type="text"
                  value={user.name}
                  className="p-1"
                  {...register("fullname", { required: true, maxLength: 40 })}
                />
                <br />
                {errors.fullname && <span className="error">This field is required</span>}
              </div>

              <div>
                <h6> Email </h6>
                <input
                  type="email"
                  value={user.email}
                  className="p-1"
                  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })}
                />
                {errors.fullname && <span>This field is required</span>}
              </div>

              <div>
                <h6> Service You are going to Purchase</h6>
                <input type="text" className="p-1" {...register("service")} />
              </div>

              <p> Pay With - </p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Book;
