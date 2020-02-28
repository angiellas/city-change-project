import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import DetailsDisplay from "../DetailsDisplay/DetailsDisplay";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import Accordion from "react-bootstrap/Accordion";
import "./ScoreDetails.css";

function ScoreWrapper(props) {
  return <div {...props} />;
}

function ScoreDetails({ name, details, score }) {
  const [show, setShow] = useState(false);

  return (
    <Container className="ScoreDetails">
      <Accordion className="toggle-separator" activeKey={show ? "0" : ""}>
        <Accordion.Toggle
          as={ScoreWrapper}
          eventKey="0"
          onClick={() => setShow(!show)}
        >
          <ScoreDisplay name={name} score={score} />
        </Accordion.Toggle>
        <Accordion.Collapse className="separator" eventKey="0">
          <DetailsDisplay label={name} data={details.data} />
        </Accordion.Collapse>
      </Accordion>
    </Container>
  );
}

export default ScoreDetails;
