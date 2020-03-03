import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./ButtonToMap.css";

function ButtonToMap({ name }) {
  return (
    <Container className="ButtonToMap">
      <Link to={`/map/${name}`}>
        <Button className="buttonStyle" size="lg">
          See This City
        </Button>
      </Link>
    </Container>
  );
}

export default ButtonToMap;
