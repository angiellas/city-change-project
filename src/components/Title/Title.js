import React from "react";
import Row from "react-bootstrap/Row";
import "./Title.css";

function Title({
  headline,
  subtitle,
  backgroundColor = "transparent",
  color = "inherit"
}) {
  return (
    <Row className="Title justify-content-center">
      <div>
        <h5
          className="mini-title ml-5 pl-2 mb-0 ml-lg-5 pl-lg-5 mb-lg-0"
          style={{ color: backgroundColor }}
        >
          {headline}
        </h5>
        <h1 className="title-style pt-0" style={{ backgroundColor, color }}>
          {subtitle}
        </h1>
      </div>
    </Row>
  );
}

export default Title;
