import React from "react";
import MapView from "../../../components/Map/MapView";
import { makeStyles } from "@material-ui/core/styles";
import data from "../../../assets/data";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  mapa: {
    float: "left",
    marginLeft: 50,
  },
  titulo: {
    marginLeft: 250,
    fontSize: "20px",
  },
  textoCuadro: {
    fontSize: "20px",
    height: "15vh",
    width: "50vh",
    backgroundColor: "#cbe2ff",
    border: "3px solid #386dd3",
    borderRadius: "10px",
    paddingTop: "10px",
    float: "right",
    marginRight: 150,
    marginTop: 5,
    paddingLeft: "40px",
  },
  textoCuadro2: {
    fontSize: "20px",
    height: "15vh",
    width: "50vh",
    backgroundColor: "#cbe2ff",
    border: "3px solid #386dd3",
    borderRadius: "10px",
    paddingTop: "10px",
    float: "right",
    marginRight: 150,
    marginTop: 5,
    paddingLeft: "40px",
  },
}));

export default function Mapa() {
  const { id } = useParams();
  const classes = useStyles();
  return (
    <div
      style={{
        height: "75vh",
      }}
    >
      <div>
        <p className={classes.titulo}>Rastreo GPS</p>
      </div>
      <div className={classes.mapa}>
        <MapView truck={data.trucks[parseInt(id) - 1]} />
      </div>
      <div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Datos del conductor
        </p>
        <div className={classes.textoCuadro}>
          Nombre:  <br />
          DNI:  <br />
          Empresa: 
        </div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: 200,
          }}
        >
          Datos del vehículo
        </p>
        <div className={classes.textoCuadro2}>
          Modelo: <br />
          Placa: <br />
          Tipo:
        </div>
      </div>
    </div>
  );
}
