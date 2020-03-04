import React from "react";
import Title from "./Title";
import "./CitiesWithTitle.css";

function CitiesWithTitle({ orientation = "left", children }) {
  return (
    <Title
      className={`CitiesWithTitle ${orientation}`}
      headline="Cities with"
      subtitle={children}
      fontSize="50px"
      color="rgb(255, 0, 104)"
      backgroundColor="none"
    />
  );
}

export default CitiesWithTitle;
