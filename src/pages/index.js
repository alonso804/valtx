import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { UserServices } from "../services/UserServices";
import { StorageService } from "../services/StorageService";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  recuerda: {
    textAlign: "left",
    height: "5vh",
    fontSize: "20px",
    fontFamily: "Modern Antiqua",
  },
  recuerdaCuadro: {
    fontFamily: "Modern Antiqua",
    border: "3px solid #386dd3",
    borderRadius: "5px",
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#cbe2ff",
    padding: "20px",
    fontSize: "20px",
    justifyContent: "space-around",
  },
  recuerdaCuadroImagen: {
    marginRight: "30px",
  },
  bienvenidaA: {
    textAlign: "right",
    height: "5vh",
    color: "#386dd3",
    fontSize: "40px",
    fontFamily: "Saira",
  },
  bienvenidaB: {
    textAlign: "right",
    height: "5vh",
    color: "black",
    fontSize: "20px",
    fontFamily: "Modern Antiqua",
  },
  cuadro: {
    marginTop: "30px",
    border: "3px solid #386dd3",
    borderRadius: "5px",
    backgroundColor: "#cbe2ff",
    fontSize: "20px",
    fontFamily: "Modern Antiqua",
    overflow: "hidden",
  },
  gridTitle: {
    backgroundColor: "#cbe2ff",
    padding: "20px",
    alignSelf: "center",
    borderBottom: "3px solid #386dd3",
  },
  gridContainer: {
    borderRight: "3px solid #386dd3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 0",
  },
  textoCuadro: {
    textAlign: "center",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [name, setName] = useState(null);
  const history = useHistory();

  const getUser = () => {
    UserServices.get(StorageService.getUserId())
      .then((res) => {
        const { user } = res.data;
        setName(`${user.firstName} ${user.lastName}`);
      })
      .catch((err) => {
        console.log(err);
        StorageService.logout();
        history.push("/signin");
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!name) {
    return (
      <Box pt={4} style={{ display: "flex", justifyContent: "center" }}>
        <Loader type="Puff" color="#E2E5EE" height={100} width={100} />
      </Box>
    );
  }

  return (
    <div>
      <div>
        <h1 className={classes.bienvenidaA}>
          Bienvenido, <b>{name}</b>
        </h1>
      </div>
      <div>
        <h2 className={classes.bienvenidaB}>
          Con V-Truck podrás monitorear vehículos en ruta <br /> y mejorar su
          productividad
        </h2>
      </div>
      <div>
        <h2 className={classes.recuerda}>Recuerda:</h2>
        <div className={classes.recuerdaCuadro}>
          <div className={classes.recuerdaCuadroImagen}>
            <img
              src="https://i.ibb.co/JkG5VjZ/image4.png"
              alt=""
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
          <div>
            Mantener actualizados los <br />
            datos del transportista.
          </div>
        </div>
      </div>

      <Grid container className={classes.cuadro}>
        <Grid item xs={12} className={classes.gridTitle}>
          Alertar al conductor en caso:
        </Grid>
        <Grid item container xs={12} sm={4} className={classes.gridContainer}>
          <div>
            <img src="https://i.ibb.co/FKk1pRs/image3.png" alt="" />
          </div>
          <div className={classes.textoCuadro}>
            La temperatura de los <br />
            activos no sea la <br />
            adecuada.
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.gridContainer}>
          <div>
            <img src="https://i.ibb.co/S6PNH4F/image1.png" alt="" />
          </div>
          <div className={classes.textoCuadro}>
            El vehículo no se <br />
            encuentre en la ruta <br />
            establecida.
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.gridContainer}
          style={{ border: "none" }}
        >
          <div>
            <img src="https://i.ibb.co/C1w0bqt/image2.png" alt="" />
          </div>
          <div className={classes.textoCuadro}>
            Se detecte una
            <br /> apertura de
            <br /> puerta inusual.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
