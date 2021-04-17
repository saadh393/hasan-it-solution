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
import { useContext, useState } from "react";
import { userDataContext } from "../App";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const [user, setUser] = useContext(userDataContext);
  const [status, setStatus] = useState("");
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loginAsClient, setloginAsClient] = useState(false);

  useEffect(() => {
    console.log(from);
    let userAs =
      from.pathname.includes("book") ||
      from.pathname.includes("bookinglist") ||
      from.pathname.includes("review") ||
      from.pathname === "/"
        ? true
        : false;

    setloginAsClient(userAs);
  }, []);

  const handleSignIn = () => {
    setStatus("Authenticating...");
    const role = loginAsClient ? "client" : "admin";
    handleGoogleSignin().then(({ user }) => {
      const userInfo = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role,
        purchases: [],
      };
      setStatus("Authentication Success\nRedirecting....");
      axios.post("https://frozen-sierra-16673.herokuapp.com/storeUserInfo", userInfo).then(({ data }) => {
        if (data.msg) {
          data && setUser(userInfo);
          history.replace(from);
          setStatus("");
        } else {
          console.log(data);
          if (data[0].role === role) {
            data && setUser(userInfo);
            history.replace(from);
            setStatus("");
          } else {
            setStatus("Sorry, We Can`t Allow You. \nAn Admin Can`t be a Client\nAnd a Client Can`t be an Admin");
          }
        }

        // {msg: "Newly Created",
      });
    });
  };

  return (
    <>
      <Container>
        <Nav />
      </Container>
      <section className="loginPageWrapper d-flex flex-column justify-content-top pt-4 align-items-center">
        <img src={login} className="loginPageImage" alt="" />
        {status}
        <div className="form-check d-flex">You are Logining As {loginAsClient ? "Client" : "Admin"}</div>
        <div className="googleLogin " onClick={handleSignIn}>
          <img src={google} />
          Login with Google
        </div>
      </section>
    </>
  );
};

export default Login;
