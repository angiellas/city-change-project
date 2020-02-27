import React from "react";
import Title from "./Title";

function CityTitle({ city }) {
  return (
    <Title
      headline="Welcome to"
      subtitle={city}
      color="white"
      backgroundColor="rgb(255,0,104)"
    />
  );
}

export default CityTitle;
