import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Slider from "../components/Slider/Slider";
import Search from "../components/Search/Search";
import CitiesWithTitle from "../components/Title/CitiesWithTitle";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="Home background-image">
        <div className="box-container">
          <h2 className="box-title">Welcome to City Change</h2>
          <p>
            Welcome to the app that can help you decide if a city is the right
            move for you. Whether it is about schools, health, crime rate or low
            income tax. We got you covered! Just enter your city in and we will
            provide you will all the important things that will help determine
            if this is the right move for you.
          </p>
        </div>

        <div className="box-container-two">
          <h2 className="box-title-two">Search your City</h2>
          <p>
            Just simply enter the name of the City you are interested in knowing
            more about and we at City Change will give you everything you need
            to know.
          </p>
          <div className="search-style">
            <Search />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Row className="row-carousel">
          <CitiesWithTitle>LOWEST INCOME TAX</CitiesWithTitle>

          <Col className="column-carousel">
            <Slider
              cities={[
                "doha",
                "riyadh",
                "dubai",
                "singapore",
                "almaty",
                "guatemala-city"
              ]}
              criterion="Taxation"
            />
          </Col>
        </Row>
        <Row className="row-carousel right pr-3">
          <CitiesWithTitle orientation="right">
            LOWEST CRIME RATE
          </CitiesWithTitle>

          <Col className="column-carousel">
            <Slider
              cities={[
                "tokyo",
                "osaka",
                "kyoto",
                "singapore",
                "fukuoka",
                "aarhus"
              ]}
              criterion="Safety"
            />
          </Col>
        </Row>
        <Row className="row-carousel">
          <CitiesWithTitle>BEST HEALTHCARE</CitiesWithTitle>

          <Col className="column-carousel">
            <Slider
              cities={[
                "zurich",
                "geneva",
                "lausanne",
                "bern",
                "brisbane",
                "perth"
              ]}
              criterion="Healthcare"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
