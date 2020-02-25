import React from "react";
import CityHeader from "./components/CityHeader/CityHeader";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <CityHeader />
      <Switch>
        <Route exact path="/" component={() => null} />
        <Route path="/preferences" component={() => null} />
        <Route path="/results" component={() => null} />
        <Route path="/city" component={() => null} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
