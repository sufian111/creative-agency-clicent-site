import React, { useContext } from "react";
import "./LoginMain.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";
import { userDetails } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";

const LoginMain = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggingUser, setLoggingUser] = useContext(userDetails);

  const handleGoogleLogIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        setLoggingUser({ email: res.user.email, name: res.user.displayName });
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(loggingUser);
  return (
    <div>
      <div className="loginDiv ">
        <div>
          <p className="logText">Login With</p>
        </div>
        <div
          onClick={handleGoogleLogIn}
          className="bgwithDiv"
          style={{
            backgroundColor: "#FFFFFF",
            padding: "15px",
            marginTop: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "15px",
            width: "457px",
            textAlign: "center",
            border: "px solid #C7C7C7",
            boxSizing: "border-box",
            borderRadius: "57px",
          }}
        >
          Continue with Google
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
