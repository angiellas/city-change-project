import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CityHeader from "./components/CityHeader/CityHeader";
import { Switch, Route } from "react-router-dom";
import CityDetails from "./components/CityDetails/CityDetails";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Container className="container-style mt-3" fluid>
        <Row>
          <Col sm={12} md={12} lg={2}>
            <CityHeader />
          </Col>
          <Col sm={12} md={12} lg={10} className="mt-3 pl-0 pr-0">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/map" component={() => null} />
              <Route path="/city/:cityName" component={CityDetails} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
