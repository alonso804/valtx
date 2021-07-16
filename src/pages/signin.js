import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SigninForm from "../components/Form/SigninForm";
import Copyright from "../components/Copyright/Copyright";
import Seo from "../components/SEO/Seo";

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
    <>
      <Seo title="VTruck | Iniciar Sesión" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <SigninForm />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};
export default Signin;
