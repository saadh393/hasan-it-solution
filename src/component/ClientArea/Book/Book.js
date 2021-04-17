/*  
💥 Title : Book
📃 Description : Book 
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userDataContext } from "../../../App";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useParams, useRouteMatch } from "react-router";

const Book = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const stripe = useStripe();
  const elements = useElements();
  const [user, setUser] = useContext(userDataContext);
  let { serviceId } = useParams();
  const [status, setStatus] = useState("");
  const [selectedService, setService] = useState("");
  serviceId = typeof serviceId === "string" ? serviceId : user.availableServices[0]._id;

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Your Payment is Processing...");
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setStatus("Success...");
      const purchaseArr = [...user.purchases];

      const serviceName =
        selectedService || user.availableServices.filter((service) => service._id === serviceId)[0].serviceTitle;

      const purchasedService = user.availableServices.filter((service) => service.serviceTitle === serviceName)[0];
      purchasedService.paymentId = paymentMethod.id;
      purchasedService.action = "Pending";
      purchaseArr.push(purchasedService);

      // Filtering User Data
      const userData = { ...user };
      // delete userData.availableServices;

      const dataToStore = {
        ...userData,
        purchases: purchaseArr,
      };

      axios.post("http://localhost:4000/purchase", dataToStore).then(({ data }) => {
        if (data) {
          e.target.reset();
          cardElement.clear();
          setUser(dataToStore);
          setStatus("");
          console.log("Response : ", data);
        }
      });
    }
  };

  // const stripePromise = loadStripe(
  //   "pk_test_51Igso4Dk6nSkfu8eTsTwLzxQx4sbdUJwOQkjWmiz7E20THAERSuluIZuEsslyC4Llwqx4La04uJtMqMChLSKJ7uF00IQ2Timhw"
  // );

  const sub = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <h2> Booking Area </h2>

        <Card className="p-4 mt-3">
          <div>
            <form onSubmit={onSubmit} className="d-flex flex-column" style={{ gap: "20px" }}>
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
                  disabled
                  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })}
                />
                {errors.fullname && <span>This field is required</span>}
              </div>

              <div>
                <h6> Service You are going to Purchase</h6>
                {/* <input type="text" className="p-1" value={user.selectedService} disabled {...register("service")} /> */}
                <select onChange={(e) => setService(e.target.value)}>
                  {user.availableServices.map((service) => {
                    const ifSelected = serviceId === service._id ? true : false;

                    return (
                      <option selected={ifSelected} value={service.serviceTitle}>
                        {service.serviceTitle}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="m-0">
                  You Will be Charged <input type="text" value="1000" disabled className="p-2" />{" "}
                </label>
              </div>

              <label className="m-0">Pay With -</label>
              <CardElement
                className="form-control w-50"
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              {status}
              <button type="submit" disabled={!stripe}>
                Submit
              </button>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Book;
