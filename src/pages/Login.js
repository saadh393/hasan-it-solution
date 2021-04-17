/*  
💥 Title : Login
📃 Description : Login Page
✍ Author : Saad Hasan
⌚ Date : 16/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import login from "../images/login.jpg";
import google from "../images/google.svg";
import "../styles/login.css";
import Nav from "../component/Global/Nav/Nav";
import { handleGoogleSignin } from "../firebase/firebase.config";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { userDataContext } from "../App";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useContext(userDataContext);

  const handleSignIn = () => {
    handleGoogleSignin().then(({ user }) => {
      const userInfo = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        purchases: [],
      };

      axios.post("http://localhost:4000/storeUserInfo", userInfo).then(({ data }) => {
        console.log(data);
        data && setUser(userInfo);
        localStorage.setItem("cookie", JSON.stringify(userInfo));
      });
    });
  };

  return (
    <>
      <Container>
        <Nav />
      </Container>
      <section className="loginPageWrapper d-flex flex-column justify-content-center align-items-center">
        <img src={login} className="loginPageImage" alt="" />
        <div className="googleLogin " onClick={handleSignIn}>
          <img src={google} />
          Login with Google
        </div>
      </section>
    </>
  );
};

export default Login;
