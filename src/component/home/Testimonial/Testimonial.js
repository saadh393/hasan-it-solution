/*  
💥 Title : Testimonial
📃 Description : What our Client says about us
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Row } from "react-bootstrap";
import CardTestimonial from "../CardTestimonial/CardTestimonial";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section className="my-5 text-center">
        <h1 className="text-head">Testimonial</h1>
        <p className="text-sub">What Our Client Says</p>

        <Row className="my-5">
          <CardTestimonial />
          <CardTestimonial />
          <CardTestimonial />
        </Row>
      </section>
    </>
  );
};

export default Testimonial;
