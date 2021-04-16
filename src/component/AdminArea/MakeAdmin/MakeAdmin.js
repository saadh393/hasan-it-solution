/*  
💥 Title : MakeAdmin
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h3>Add New Admin</h3>
      <Card className="p-4">
        <form>
          <label>
            Email <small>(A Client Can't be an Admin) </small> :
          </label>
          <input
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })}
          />
          <br />
          {errors.email && <span>This field is required</span>}
          <button type="submit" className="mt-0">
            Submit
          </button>
        </form>
      </Card>
    </>
  );
};

export default MakeAdmin;
