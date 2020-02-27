import React from "react";
import Row from "react-bootstrap/Row";
import "./CitySubTitle.css";

function CitySubTitle({ citysubtitle }) {
  return (
    <Row className="sub-heading">
      <div>
        <h2 className="sub-heading-style ml-5 pl-2 mb-0 ml-lg-5 pl-lg-5 mb-lg-0">
          {citysubtitle}
        </h2>
      </div>
    </Row>
  );
}
export default CitySubTitle;
