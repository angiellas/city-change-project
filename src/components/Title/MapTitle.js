import React from "react";
import Title from "./Title";

function MapTitle({ city }) {
  return (
    <Title
      headline="Welcome to"
      subtitle={`${city}Map`}
      color="white"
      backgroundColor="rgb(152, 0, 255)"
      margin=""
    />
  );
}

export default MapTitle;
