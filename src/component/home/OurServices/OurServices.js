/*  
💥 Title : OurServices
📃 Description : Our Services will be listed Here
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { userDataContext } from "../../../App";
import ServiesCard from "../ServicesCard/ServiesCard";
import "./Services.css";

const OurServices = () => {
  const [user, setUser] = useContext(userDataContext);
  const cache = JSON.parse(localStorage.getItem("services"));
  const cachedServices = cache ? cache : [];
  const [service, setServices] = useState(cachedServices);
  console.log(cachedServices);

  useEffect(() => {
    axios.get("https://frozen-sierra-16673.herokuapp.com/services").then(({ data }) => {
      localStorage.clear();
      localStorage.setItem("services", JSON.stringify(data));
      setServices(data);
      setUser({ ...user, availableServices: data });
      console.log(data);
    });
  }, []);

  return (
    <section className="text-center my-5">
      <h1 className="text-head">Our Services</h1>
      <p className="text-sub">Areas What We Serve</p>

      <Row className="mt-5">
        {service ? service.map((data, index) => <ServiesCard key={index} data={data} />) : "Loading... "}
      </Row>
    </section>
  );
};

export default OurServices;
