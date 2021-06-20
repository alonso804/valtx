import React from "react";
//import Avatar from '@material-ui/core/Avatar';
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import SignupForm from "../../components/Auth/SignupForm";
import Copyright from "../../components/Auth/Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Signup = () => {
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
          Registrarte
        </Typography>
        <SignupForm />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Signup;
