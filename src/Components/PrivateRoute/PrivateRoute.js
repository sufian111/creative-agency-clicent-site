import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userDetails } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggingUser, setLoggingUser] = useContext(userDetails);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggingUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
