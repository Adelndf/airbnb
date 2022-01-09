import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResult }) {
  const [selectedPin, setSelectedPin] = useState({});

  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/iadelndf/cky60py4414rq14p85ngh3ozl"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(e) => setViewport(e)}
    >
      {searchResult.map((item, index) => (
        <Marker
          key={index}
          latitude={item.lat}
          longitude={item.long}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p
            role="img"
            aria-label="push-pin"
            onClick={() => setSelectedPin(item)}
            className="text-2xl cursor-pointer animate-bounce opacity-75"
          >
            📍
          </p>
          {selectedPin.long === item.long ? (
            <Popup
              onClose={() => setSelectedPin({})}
              closeOnClick={true}
              latitude={item.lat}
              longitude={item.long}
              offsetLeft={-20}
              offsetTop={-10}
              className="text-sm whitespace-nowrap"
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </Marker>
      ))}
    </ReactMapGL>
  );
}

export default Map;
