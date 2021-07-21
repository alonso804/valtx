import React from "react";
import MapView from "../../../components/Map/MapView";
import { makeStyles } from "@material-ui/core/styles";
import data from "../../../assets/data";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
    textAlign: "center",
  },
  data: {
    width: "40%",
  },
  textoCuadro: {
    border: "3px solid #386dd3",
    borderRadius: "5px",
    backgroundColor: "#cbe2ff",
    padding: "20px",
    textAlign: "left",
    lineHeight: "150%",
  },
}));

export default function Mapa() {
  const { id } = useParams();
  const classes = useStyles();

  const pageData = data.trucks[parseInt(id) - 1];

  return (
    <div className={classes.container}>
      <div>
        <div>
          <p>Rastreo GPS</p>
        </div>
        <div className={classes.mapa}>
          <MapView truck={pageData} />
        </div>
      </div>
      <div className={classes.data}>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Datos del conductor
        </p>
        <div className={classes.textoCuadro}>
          Nombre: {pageData.name}
          <br />
          DNI: {pageData.dni}
          <br />
          Empresa: {pageData.business}
        </div>
        <p>Datos del vehículo</p>
        <div className={classes.textoCuadro}>
          Modelo: {pageData.vehicleModel}
          <br />
          Placa: {pageData.vehiclePlate}
          <br />
          Tipo: {pageData.vehicleType}
        </div>
      </div>
    </div>
  );
}
