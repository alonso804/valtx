import React from "react";
import { Route, Redirect } from "react-router-dom";
import { StorageService } from "../../services/StorageService";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Copyright from "../Auth/Copyright";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
}));

export const AuthRoute = ({ ...rest }) => {
  const classes = useStyles();

  return StorageService.isLoggedIn() ? (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Route {...rest} />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  ) : (
    <Redirect to="/signin" />
  );
};

export const LogRoute = ({ ...rest }) => {
  return StorageService.isLoggedIn() ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} />
  );
};