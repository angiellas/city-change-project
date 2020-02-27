import React from "react";
import CityHeader from "./components/CityHeader/CityHeader";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <CityHeader />
      <Switch>
        <Route exact path="/" component={() => null} />
        <Route path="/map" component={() => null} />
        <Route path="/city" component={() => null} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
