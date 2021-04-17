/*  
💥 Title : MakeAdmin
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    axios
      .post("https://frozen-sierra-16673.herokuapp.com/makeAdmin", data)
      .then((data) => {
        setStatus(data.data.msg);
        console.log(data.data.msg);
        e.target.reset();
      })
      .catch((error) => {});
  };

  return (
    <>
      <h3>Add New Admin</h3>
      <Card className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name of New Admin :</label>
          <input className="form-control" placeholder="Name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red">This field is required</span>}

          <br />
          <label className="mt-4">
            Email <small>(A Client Can't be an Admin) </small> :
          </label>

          <input
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })}
          />
          <br />
          {errors.email && <span className="text-red">This field is required</span>}

          {status}
          <br />
          <button type="submit" className="mt-3">
            Submit
          </button>
        </form>
      </Card>
    </>
  );
};

export default MakeAdmin;
