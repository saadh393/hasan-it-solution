/*  
💥 Title : CardTestimonial
📃 Description : Card of Each Testimonial
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card, Col } from "react-bootstrap";
import image from "../../../images/avater.png";
import quote from "../../../images/quote.svg";

const CardTestimonial = () => {
  return (
    <>
      <Col>
        <Card className="p-4 testimonial-card">
          <div className="testimonial-quote">
            <img src={quote} />
          </div>
          <p>
            Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This
            company provide customers great solution, that makes them best.
          </p>
          <img src={image} className="testimonial-author" />
          <h4>Thomas</h4>
          <small>Engineer, Goolge</small>
        </Card>
      </Col>
    </>
  );
};

export default CardTestimonial;
