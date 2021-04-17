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
  const [service, setServices] = useState([]);
  const [user, setUser] = useContext(userDataContext);

  useEffect(() => {
    axios.get("http://localhost:4000/services").then(({ data }) => {
      // const cookie = JSON.parse(localStorage.getItem("cookie"));
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
        {service.length && service.map((data, index) => <ServiesCard key={index} data={data} />)}
        {/* <ServiesCard />
        <ServiesCard />
        <ServiesCard /> */}
      </Row>
    </section>
  );
};

export default OurServices;
