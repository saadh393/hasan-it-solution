/*  
💥 Title : Testimonial
📃 Description : What our Client says about us
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardTestimonial from "../CardTestimonial/CardTestimonial";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    axios.get("https://frozen-sierra-16673.herokuapp.com/getFeedback").then(({ data }) => {
      setTestimonial(data);
    });
  }, []);

  return (
    <>
      <section className="my-5 text-center">
        <h1 className="text-head">Testimonial</h1>
        <p className="text-sub">What Our Client Says</p>

        <Row className="my-5">
          {testimonial.map((each, index) => (
            <CardTestimonial data={each} key={index} />
          ))}
        </Row>
      </section>
    </>
  );
};

export default Testimonial;
