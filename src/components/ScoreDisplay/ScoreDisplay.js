import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ScoreDisplay.css";

function ScoreDisplay({ name, score }) {
  let variant;
  if (score <= 3) {
    variant = "danger";
  } else if (score <= 6) {
    variant = "warning";
  } else {
    variant = "success";
  }

  return (
    <Row className="ScoreDisplay p-2 align-items-center">
      <Col className={`text-${variant}`}>
        <h2>
          <strong>{name}</strong>
        </h2>
      </Col>
      <Col>
        <ProgressBar
          className="label"
          variant={variant}
          now={score * 10}
          label={`${Number(score * 10).toFixed(0)}%`}
        />
      </Col>
    </Row>
  );
}

export default ScoreDisplay;
