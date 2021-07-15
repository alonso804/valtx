import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { UserServices } from "../services/UserServices";
import { StorageService } from "../services/StorageService";

const drawerWidth = 240;

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
    height: "12vh",
    width: "50vh",
    border: "3px solid #386dd3",
    borderRadius: "5px",
    backgroundColor: "#cbe2ff",
    TextAlign: "center",
    color: "black",
    fontSize: "20px",
    fontFamily: "Modern Antiqua",
    marginBottom: "30px",
    paddingLeft: "10px",
    display: "flex",
    alignItems: "center",
  },
  recuerdaCuadroImagen: {
    float: "left",
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
    height: "35vh",
    border: "3px solid #386dd3",
    borderRadius: "5px",
    backgroundColor: "#cbe2ff",
    TextAlign: "center",
    color: "black",
    fontSize: "20px",
    fontFamily: "Modern Antiqua",
  },
  GridItem: {
    backgroundColor: "#cbe2ff",
    paddingLeft: "20px",
  },
  GridItem1: {
    height: "30vh",
    backgroundColor: "#cbe2ff",
    borderTop: "3px solid #386dd3",
    borderRight: "3px solid #386dd3",
    paddingTop: "20px",
    alignSelf: "center",
    justifySelf: "center",
  },
  GridItem2: {
    height: "30vh",
    backgroundColor: "#cbe2ff",
    borderTop: "3px solid #386dd3",
    paddingTop: "20px",
    alignSelf: "center",
    justifySelf: "center",
  },
  GridItem3: {
    height: "30vh",
    backgroundColor: "#cbe2ff",
    borderTop: "3px solid #386dd3",
    borderLeft: "3px solid #386dd3",
    paddingTop: "20px",
    alignSelf: "center",
    justifySelf: "center",
  },
  imagenes: {
    textAlign: "center",
    marginTop: "10px",
  },
  textoCuadro: {
    textAlign: "center",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [name, setName] = useState("");

  const getUser = () => {
    UserServices.get(StorageService.getUserId())
      .then((res) => {
        const { user } = res.data;
        setName(`${user.firstName} ${user.lastName}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div>
        <h1 className={classes.bienvenidaA}>
          Bienvenido, <b>{name}</b>
        </h1>
      </div>
      <div>
        <h1 className={classes.bienvenidaB}>
          Con V-Truck podrás monitorear vehículos en ruta <br /> y mejorar su
          productividad
        </h1>
      </div>
      <div>
        <h1 className={classes.recuerda}>Recuerda:</h1>
        <div className={classes.recuerdaCuadro}>
          <div className={classes.recuerdaCuadroImagen}>
            <img
              src="https://i.ibb.co/JkG5VjZ/image4.png"
              alt=""
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
          <div className={classes.recuerdaCuadroTexto}>
            Mantener actualizados los <br />
            datos del transportista.
          </div>
        </div>
      </div>

      <Grid container className={classes.cuadro}>
        <Grid item xs={12} className={classes.GridItem}>
          Alertar al conductor en caso:
        </Grid>
        <Grid item xs={12} sm={4} className={classes.GridItem1}>
          <div className={classes.imagenes}>
            <img src="https://i.ibb.co/FKk1pRs/image3.png" alt="" />
          </div>
          <div className={classes.textoCuadro}>
            La temperatura de los <br />
            activos no sea la <br />
            adecuada.
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.GridItem2}>
          <div className={classes.imagenes}>
            <img src="https://i.ibb.co/S6PNH4F/image1.png" alt="" />
          </div>
          <div className={classes.textoCuadro}>
            El vehículo no se <br />
            encuentre en la ruta <br />
            establecida.
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.GridItem3}>
          <div className={classes.imagenes}>
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
