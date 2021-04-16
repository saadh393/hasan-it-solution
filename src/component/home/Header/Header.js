/*  
💥 Title : Header
📃 Description : Working with Header
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Container } from "react-bootstrap";
import Nav from "../../Global/Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <main className="header-main">
          <Container>
            <Nav />
            <div className="header-main-content">
              <h1>HASAN</h1>
              <h3> IT Solutions </h3>
              <p> Your Business Our Responsibility.Loyalty is to the values of the company, not to the company.</p>
              <button>See Our Services -&gt; </button>
            </div>
          </Container>
        </main>
      </header>
    </>
  );
};

export default Header;
