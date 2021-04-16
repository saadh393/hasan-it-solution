/*  
💥 Title : ServiesCard
📃 Description : Each of our services
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userDataContext } from "../../../App";

const ServiesCard = ({ data }) => {
  const [user, setUser] = useContext(userDataContext);

  return (
    <>
      <Col>
        <Card style={{ height: "460px" }}>
          <div className="serviceCardWrapper">
            <div className="service-icon-holder">
              <img src={`data:image/jpeg;base64,${data.imageDatta.img}`} className="service-thubmnail" />
            </div>
            <div className="my-5 pl-2 pr-2">
              <Link to={`/dashboard/book/${data._id}`} onClick={() => setUser(data.serviceTitle)}>
                <h3> {data.serviceTitle} </h3>
              </Link>
              <p>{data.serviceDescription.slice(0, 180) + "..."}</p>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default ServiesCard;
