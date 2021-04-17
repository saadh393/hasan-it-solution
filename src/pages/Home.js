/*  
💥 Title : home
📃 Description : This page will prepare the Whole Home page for render It's Components
✍ Author : Saad Hasan
⌚ Date : 15/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { userDataContext } from "../App";
import Footer from "../component/Global/Footer/Footer";
import Header from "../component/home/Header/Header";
import OurServices from "../component/home/OurServices/OurServices";
import Testimonial from "../component/home/Testimonial/Testimonial";
import WhyChooseUs from "../component/home/WhyChooseUs/WhyChooseUs";
import WorkStat from "../component/home/WorkStat/WorkStat";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <OurServices />
        <WhyChooseUs />
        <WorkStat />

        <Testimonial />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
