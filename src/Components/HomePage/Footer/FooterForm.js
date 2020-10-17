import React from "react";
import "./FooterForm.css";
const FooterForm = () => {
  return (
    <div className="form-container">
      <input placeholder="Your email address" type="text" />
      <input placeholder="Your name / company’s name" type="text" />
      <input
        style={{ width: "100%", height: "277px" }}
        placeholder=""
        type="text"
      />
      <button className="btn btnStyleSection">Send</button>
    </div>
  );
};

export default FooterForm;
