import React from "react";
import "./Footer.css";
import FooterForm from "./FooterForm";
const Footer = () => {
  return (
    <div className="footerBg">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-4">
            <p className="footerP">
              Let us handle your project, professionally.
            </p>
            <p className="footerPtow">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <FooterForm></FooterForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
