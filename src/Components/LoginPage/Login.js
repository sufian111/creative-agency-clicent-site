import React from "react";
import LoginMain from "./LoginMain/LoginMain";
import LoginNav from "./LoginNav/LoginNav";

const Login = () => {
  return (
    <div className="container">
      <LoginNav></LoginNav>
      <LoginMain></LoginMain>
    </div>
  );
};

export default Login;
