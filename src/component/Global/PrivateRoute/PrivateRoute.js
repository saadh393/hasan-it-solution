/*  
💥 Title : PrivateRoute
📃 Description : Handling Private Routes
✍ Author : Saad Hasan
⌚ Date : 01/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userDataContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(userDataContext);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
