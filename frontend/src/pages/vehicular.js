import React from "react";
import MyMap from "../components/Map/MyMap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mapa: {
    height: 50,
    weight: 50,
    float: "right",
  }
}));

export default function Vehicular() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mapa}>
        <MyMap />
      </div>
    </>
  );
}
