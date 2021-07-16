import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = ({ data }) => {
  const { vehiclePlate } = data;

  return (
    <Popup>
      <div className="poup-text">{vehiclePlate}</div>
    </Popup>
  );
};

export default MarkerPopup;
