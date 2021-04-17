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

const CardTestimonial = ({ data }) => {
  return (
    <>
      <Col>
        <Card className="p-4 testimonial-card">
          <div className="testimonial-quote">
            <img src={quote} />
          </div>
          <p>{data.feedback}</p>
          <img src={data.photo} className="testimonial-author" />
          <h4>{data.username}</h4>
          <small>{data.email}</small>
        </Card>
      </Col>
    </>
  );
};

export default CardTestimonial;
