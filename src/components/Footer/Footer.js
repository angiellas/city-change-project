import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/img/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Link to="/">
        <img src={logo} alt="logo" />
        <p>Copyright © 2020</p>
      </Link>

      <div className="email-style">
        <a href="mailto:contact@citychange.com">Click to contact us</a>
      </div>
    </div>
  );
}

export default Footer;
