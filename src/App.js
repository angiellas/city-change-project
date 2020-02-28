import React from "react";
import CityHeader from "./components/CityHeader/CityHeader";
import { Switch, Route } from "react-router-dom";
import CityDetails from "./components/CityDetails/CityDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <CityHeader />
      <Switch>
        <Route exact path="/" component={() => null} />
        <Route path="/map" component={() => null} />
        <Route path="/city/:cityName" component={CityDetails} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
