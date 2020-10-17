import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import AllCourse from "./Components/AllCourse/AllCourse";
import FinishCustomar from "./Components/FinishCustomar/FinishCustomar";
import Home from "./Components/HomePage/Home";
import Login from "./Components/LoginPage/Login";
import OrderCourse from "./Components/OrderCourse/OrderCourse";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const userDetails = createContext();
function App() {
  const [loggingUser, setLoggingUser] = useState({ email: "", name: "" });
  return (
    <userDetails.Provider value={[loggingUser, setLoggingUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/customar">
            <FinishCustomar></FinishCustomar>
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/allCourseList">
            <AllCourse></AllCourse>
          </Route>

          <Route path="/orderCourse/:id">
            <OrderCourse></OrderCourse>
          </Route>

          <Route path="*">
            <p>this is error page</p>
          </Route>
        </Switch>
      </Router>
    </userDetails.Provider>
  );
}

export default App;
