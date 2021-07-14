import React from "react";
import MapView from "../../../components/Map/MapView";
import { makeStyles } from "@material-ui/core/styles";
import data from "../../../assets/data";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  mapa: {
    height: 50,
    weight: 50,
    float: "center",
  },
}));

export default function Mapa() {
  const { id } = useParams();
  const classes = useStyles();
  return (
    <>
      <div className={classes.mapa}>
        <MapView coords={data.camiones[parseInt(id) - 1]} />
      </div>
    </>
  );
}
