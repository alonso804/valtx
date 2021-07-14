import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./TruckMarkers";

function MapView({ coords }) {
  const position = [-12.0850812, -76.9798157];

  return (
    <Map
      className="map"
      center={position}
      zoom={13}
      style={{ height: 500, width: 500 }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />

      <Markers camiones={coords} />
    </Map>
  );
}

export default MapView;
