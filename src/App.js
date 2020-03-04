import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Switch, Route } from "react-router-dom";
import CityHeader from "./components/CityHeader/CityHeader";
import CityDetails from "./components/CityDetails/CityDetails";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Map from "./pages/Map";
import About from "./pages/About";

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
              <Route path="/map/:cityName" component={Map} />
              <Route path="/city/:cityName" component={CityDetails} />
              <Route path="/about" component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
