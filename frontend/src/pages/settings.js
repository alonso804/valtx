import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
//import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(1),
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    width: "50%",
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Settings() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="driverName"
              label="Nombre del conductor"
              name="driverName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="driverDni"
              label="DNI del conductor"
              name="driverDni"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="vehiclePlate"
              label="Placa del vehículo"
              name="vehiclePlate"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="phoneNumber"
              label="Número de teléfono"
              name="phoneNumber"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="startDate"
              label="Fecha de inicio"
              name="startDate"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="endDate"
              label="Fecha de fin"
              name="endDate"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="business"
              label="Empresa contratante"
              name="bisiness"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="observations"
              label="Observaciones"
              name="observations"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-2-1583234102.jpg"
                alt=""
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            </Container>
            <Container
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <input type="file" />
            </Container>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Registrarte
        </Button>
      </form>
    </>
  );
}
