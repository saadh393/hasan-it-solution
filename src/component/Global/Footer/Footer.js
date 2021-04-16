/*  
💥 Title : Footer
📃 Description : F
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <a className="navbar-brand" href="#">
                <img src={logo} />
                <h2>Hasan IT Solutions</h2>
              </a>
              <p>
                Our company has been developing high-quality and reliable software for corporate needs since 2008. We
                are renowned professionals of software development
              </p>
            </Col>
            <Col md={4} className="pl-5">
              <h4>Menu</h4>
              <ul>
                <Link>Home</Link>
                <Link>Services</Link>
                <Link>Our Team</Link>
                <Link>Admin</Link>
                <Link>Login</Link>
              </ul>
            </Col>
            <Col md={4}>
              <h4> Our Contacts </h4>
              <p>301 S Irving Blvd Los Angeles, CA 90020</p>
              <p>+1 323-913-4688, +1 323-888-4554</p>
              <p>mail@example.com</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
