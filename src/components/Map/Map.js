import React from "react";
import BingMap from "./BingMap";
import "./Map.css";

function Map({ center, ...props }) {
  return (
    <BingMap
      className="BingMap"
      credentials="AihumCrOCoYNep-kftkzRympZXGcnbb10c1y0DaFgsj_s_LZZBFB0SMvzMDZiKGF"
      center={center}
      customMapStyle={{
        elements: {
          area: { fillColor: "#ffb6e591" },
          water: { fillColor: "#ff75cff0" },
          tollRoad: { fillColor: "#a964f4", strokeColor: "#a964f4" },
          arterialRoad: { fillColor: "#ffffff", strokeColor: "#d7dae7" },
          road: { fillColor: "#ffa35a", strokeColor: "#ff9c4f" },
          street: { fillColor: "#ffffff", strokeColor: "#ffffff" }
        },
        settings: {
          landColor: "#efe9e1"
        }
      }}
      {...props}
    />
  );
}

export default Map;
