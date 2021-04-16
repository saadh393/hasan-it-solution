/*  
💥 Title : OurServices
📃 Description : Our Services will be listed Here
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import ServiesCard from "../ServicesCard/ServiesCard";
import "./Services.css";

const OurServices = () => {
  const [service, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/services").then(({ data }) => setServices(data));
  }, []);

  return (
    <section className="text-center my-5">
      <h1 className="text-head">Our Services</h1>
      <p className="text-sub">Areas What We Serve</p>

      <Row className="mt-5">
        {service.length && service.map((data) => <ServiesCard data={data} />)}
        {/* <ServiesCard />
        <ServiesCard />
        <ServiesCard /> */}
      </Row>
    </section>
  );
};

export default OurServices;
