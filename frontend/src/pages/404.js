import React from "react";
import VTruckNotFound from "../assets/404-valtx.png";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={VTruckNotFound} alt="not found" />
      <h2>Página no encontrada</h2>
    </div>
  );
};

export default NotFound;
