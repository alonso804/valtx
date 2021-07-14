import React, { useEffect, useState } from "react";
import data from "../../../assets/data";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Location from "../../../assets/location.png";
import Door from "../../../assets/door.png";
import Temperature from "../../../assets/temperature.png";
import MonitoringModal from "../../../components/Modal/MonitoringModal";
import ReturnButton from "../../../components/Button/ReturnButton";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h6": {
      marginTop: "20px",
    },
    padding: "20px",
    border: "2px solid #386DD3",
    borderRadius: "10px",
  },
}));

export default function Monitoring() {
  const classes = useStyles();
  const { id } = useParams();
  const [information, setInformation] = useState({
    open: false,
    title: "",
    firstData: { name: "", data: "" },
    secondData: { name: "", data: "" },
    alertMessage: "",
  });

  const [currentData, setCurrentData] = useState();

  const getData = () => {
    const { gps, temperature, doors } = data.trucks[parseInt(id) - 1];
    setCurrentData({ gps, temperature, doors });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClose = () => {
    setInformation({
      ...information,
      open: false,
    });
  };

  return (
    <>
      <ReturnButton path="/report" width="15%" />
      <div className={classes.container}>
        <div>
          <img src="https://i.postimg.cc/Zqjm9pmn/PikPng-2.png" alt="camion" />
        </div>
        <div className={classes.buttons}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setInformation({
                open: true,
                title: "Monitoreo GPS",
                firstData: {
                  name: "Lugar y hora de salida",
                  data: `${currentData["gps"].origin} - ${currentData["gps"].startHourOrigin}`,
                },
                secondData: {
                  name: "Destino",
                  data: currentData["gps"].destiny,
                },
                alertMessage: "No está en la ruta",
              });
            }}
          >
            <div className={classes.button}>
              <img src={Location} alt="GPS" />
              <Typography variant="h6" component="h6">
                Monitoreo GPS
              </Typography>
            </div>
          </Button>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setInformation({
                open: true,
                title: `Monitoreo de temperatura en la zona de ${currentData["temperature"].zone}`,
                firstData: {
                  name: "Temperatura exigida",
                  data: currentData["temperature"].demanded,
                },
                secondData: {
                  name: "Temperatura actual",
                  data: currentData["temperature"].current,
                },
                alertMessage: "La temperatura no es correcta",
              });
            }}
          >
            <div className={classes.button}>
              <img src={Temperature} alt="termómetro" />
              <Typography variant="h6" component="h6">
                Monitoreo de temperatura
              </Typography>
            </div>
          </Button>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setInformation({
                open: true,
                title: `Monitoreo de puertas en la zona de ${currentData["doors"].zone}`,
                firstData: {
                  name: "Hora de última apertura",
                  data: currentData["doors"].lastHourOpen,
                },
                secondData: {
                  name: "N° veces que se abrió",
                  data: currentData["doors"].timesOpened,
                },
                alertMessage: "Se detectó apertura de puertas",
              });
            }}
          >
            <div className={classes.button}>
              <img src={Door} alt="puerta" />
              <Typography variant="h6" component="h6">
                Monitoreo de puertas
              </Typography>
            </div>
          </Button>
        </div>
        <MonitoringModal
          open={information.open}
          title={information.title}
          firstData={information.firstData}
          secondData={information.secondData}
          alertMessage={information.alertMessage}
          handleClose={handleClose}
        />
      </div>
    </>
  );
}
