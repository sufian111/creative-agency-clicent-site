import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Login from "./Components/LoginPage/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <p>this is error page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
