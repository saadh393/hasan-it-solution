/*  
💥 Title : WhyChooseUs
📃 Description : Why ......
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Row } from "react-bootstrap";
import CardWhyChoose from "../CardWhyChoose/CardWhyChoose";
import "./WhyChoose.css";

const WhyChooseUs = () => {
  return (
    <>
      <section className="p-3 text-center mt-5">
        <h1 className="text-head">Why Choose Us</h1>
        <p className="text-sub">Reasons That will Help you to Decide</p>
      </section>
      <Row className="my-4 mb-5">
        <CardWhyChoose />
        <CardWhyChoose />
        <CardWhyChoose />
        <CardWhyChoose />
        <CardWhyChoose />
        <CardWhyChoose />
      </Row>
    </>
  );
};

export default WhyChooseUs;
