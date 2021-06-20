import React from "react";
//import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SigninForm from "../../components/Auth/SigninForm";
import Copyright from "../../components/Auth/Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Signin = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/*
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        */}
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <SigninForm />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Signin;
