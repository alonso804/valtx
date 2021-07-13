import React from "react";
import MyMap from "../../components/Map/MyMap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mapa: {
    height: 50,
    weight: 50,
    float: "center",
  },
}));

export default function Mapa() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mapa}>
        <MyMap />
      </div>
    </>
  );
}
