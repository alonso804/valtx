import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
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
    padding: "10px"
  },
  recuerdaCuadroTexto: {
    float: "center",
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
    height: "30vh",
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
  },
  GridItem1: {
    height: "25vh",
    backgroundColor: "#cbe2ff",
    borderTop: "3px solid #386dd3",
    borderRight: "3px solid #386dd3",
  },
  GridItem2: {
    height: "25vh",
    backgroundColor: "#cbe2ff",
    borderTop: "3px solid #386dd3",
  },
  GridItem3: {
    height: "25vh",
    backgroundColor: "#cbe2ff",
    borderTop: "3px solid #386dd3",
    borderLeft: "3px solid #386dd3",
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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <div>
        <h1 className={classes.bienvenidaA}>
          Bienvenido, <b>Juan Perez</b>
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
              style="left"
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
            <img src="https://i.ibb.co/FKk1pRs/image3.png" />
          </div>
          <div className={classes.textoCuadro}>
            La temperatura de los <br />
            activos no sea la <br />
            adecuada.
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.GridItem2}>
          <div className={classes.imagenes}>
            <img src="https://i.ibb.co/S6PNH4F/image1.png" />
          </div>
          <div className={classes.textoCuadro}>
            El vehículo no se <br />
            encuentre en la ruta <br />
            establecida.
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.GridItem3}>
          <div className={classes.imagenes}>
            <img src="https://i.ibb.co/C1w0bqt/image2.png" />
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
