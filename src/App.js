/*  🔥 React Dependencies 🔥 */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { createContext } from "react";
import { useState } from "react";

export const userDataContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <userDataContext.Provider value={[user, setUser]}>
        <button onClick={() => console.log(user)}>Log State</button>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/service/:id">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </userDataContext.Provider>
    </>
  );
}

export default App;
