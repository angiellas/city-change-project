import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapTitle from "../components/Title/MapTitle";
import CityMap from "../components/Map/Map";

function Map(props) {
  const [name, setName] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [hasError, setHasError] = useState(false);
  const { cityName } = useParams();

  useEffect(() => {
    fetch(`https://api.teleport.org/api/urban_areas/slug:${cityName}/`)
      .then(response => response.json())
      .then(response => {
        setName(response.name);
        setCoordinates(response.bounding_box.latlon);
      })
      .catch(error => {
        setHasError(true);
      });
  }, [cityName]);

  if (hasError) {
    return "Sorry this city is not available at the moment try another";
  }

  if (!coordinates) {
    return null;
  }

  const center = {
    lng: (coordinates.east + coordinates.west) / 2,
    lat: (coordinates.north + coordinates.south) / 2
  };

  return (
    <div className="Map">
      <MapTitle city={name} />
      <div className="mx-3">
        <CityMap center={center} />
      </div>
    </div>
  );
}

export default Map;
