import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from "@material-ui/core";
import { Formik } from "formik";
import { AuthServices } from "../../services/AuthServices";
import { StorageService } from "../../services/StorageService";
import ErrorModal from "../Modal/ErrorModal";
import { Link, useHistory } from "react-router-dom";
import { inputError, errorMessage } from "./errors";
import SubmitButton from "../Button/SubmitButton";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

const SigninForm = () => {
  const classes = useStyles();
  const [fail, setFail] = useState({ open: false, message: "" });
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setFail({ open: false, message: "" });
  };

  return (
    <Formik
      initialValues={{
        /*
         *username: "alonso804",
         *password: "1234",
         */
        username: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Username requerido";
        }

        if (!values.password) {
          errors.password = "Contraseña requerida";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setLoading(true);
        AuthServices.signin(values)
          .then((res) => {
            const { token, userId } = res.data;
            StorageService.setJWT(token);
            StorageService.setUserId(userId);
            history.push("/");
          })
          .catch((err) => {
            console.log(err);
            setFail({ open: true, message: err.response.data.message });
          });
        setLoading(false);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={values.username}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            error={inputError(errors, touched, "username")}
          />
          <FormHelperText style={{ color: "red" }}>
            {errorMessage(errors, touched, "username")}
          </FormHelperText>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={values.password}
            autoComplete="current-password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={inputError(errors, touched, "password")}
          />
          <FormHelperText style={{ color: "red" }}>
            {errorMessage(errors, touched, "password")}
          </FormHelperText>
          <SubmitButton
            loading={loading}
            text="Iniciar Sesión"
            disabled={isSubmitting}
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">{"¿No tienes cuenta? Regístrate"}</Link>
            </Grid>
          </Grid>
          <ErrorModal
            open={fail.open}
            message={fail.message}
            handleClose={handleClose}
          />
        </form>
      )}
    </Formik>
  );
};

export default SigninForm;
