import React from "react";
import VTruckNotFound from "../assets/404-valtx.png";
import Typography from "@material-ui/core/Typography";

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
      <Typography component="h2" variant="h5">
        Página no encontrada
      </Typography>
    </div>
  );
};

export default NotFound;
