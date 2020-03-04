import React from "react";
import "./Title.css";

function Title({
  headline,
  subtitle,
  backgroundColor = "transparent",
  color = "inherit",
  subtitleFontSize = "",
  className = ""
}) {
  return (
    <div className={`Title d-flex justify-content-center ${className}`}>
      <div>
        <h5
          className="mini-title ml-5 pl-2 mb-0 ml-lg-5 pl-lg-5 mb-lg-0"
          style={{ color: backgroundColor }}
        >
          {headline}
        </h5>
        <h1
          className="title-style pt-0 mr-0 ml-0"
          style={{ backgroundColor, color, subtitleFontSize }}
        >
          {subtitle}
        </h1>
      </div>
    </div>
  );
}

export default Title;
