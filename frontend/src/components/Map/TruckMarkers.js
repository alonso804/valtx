import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import { TruckLocationIcon } from "./TruckLocationIcon";
import MarkerPopup from "./MarkerPopup";

const TruckMarkers = ({ truck }) => {
  return (
    <Fragment>
      <Marker position={truck.coordinates} icon={TruckLocationIcon}>
        <MarkerPopup data={truck} />
      </Marker>
    </Fragment>
  );
};

export default TruckMarkers;
