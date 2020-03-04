import React, { useEffect, useRef } from "react";

export default function BingMap({
  center,
  credentials,
  className,
  customMapStyle,
  disableBirdseye,
  disableMapTypeSelectorMouseOver,
  disableStreetside,
  disableStreetsideAutoCoverage,
  enableClickableLogo,
  id,
  navigationBarMode,
  showDashboard,
  showMapTypeSelector,
  showScalebar,
  showTermsLink
}) {
  const bingMapsScriptSrc = `https://www.bing.com/api/maps/mapcontrol?callback=bingmapsCallback`;

  // Ref to store bing map and Maps class once loaded
  const bingMap = useRef(null);

  // Load bing maps script to DOM on mount
  useEffect(() => {
    const scriptTag = document.createElement("script");

    function updateMap() {
      bingMap.current = new window.Microsoft.Maps.Map(`#${id}`, {
        credentials,
        center: new window.Microsoft.Maps.Location(center.lat, center.lng),
        customMapStyle,
        disableBirdseye,
        disableMapTypeSelectorMouseOver,
        disableStreetside,
        disableStreetsideAutoCoverage,
        enableClickableLogo,
        showDashboard,
        showMapTypeSelector,
        showScalebar,
        showTermsLink
      });
    }

    if (document.querySelector(`script[src="${bingMapsScriptSrc}"]`) === null) {
      scriptTag.src = bingMapsScriptSrc;

      window.bingmapsCallback = () => {
        updateMap();
      };

      document.head.appendChild(scriptTag);
    } else {
      updateMap();
    }
  }, []);

  return <div className={className} id={id} />;
}

BingMap.defaultProps = {
  credentials: undefined,
  center: { lat: 0, lng: 0 },
  className: "bing__map",
  customMapStyle: undefined,
  disableBirdseye: false,
  disableMapTypeSelectorMouseOver: false,
  disableStreetside: false,
  disableStreetsideAutoCoverage: false,
  enableClickableLogo: true,
  id: "bing_map_0",
  navigationBarMode: "default",
  showDashboard: true,
  showMapTypeSelector: true,
  showScalebar: true,
  showTermsLink: true
};
