import React from "react";
import "./Footer.css";
import logo from "../../static/img/logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" />
      <p>Copyright © 2020</p>
      <p>
        Contact us:{" "}
        <a href="mailto:contact@citychange.com">contact@citychange.com</a>
      </p>
    </div>
  );
};

export default Footer;
