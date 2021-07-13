import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { AuthServices } from "../../services/AuthServices";
import { StorageService } from "../../services/StorageService";
import ErrorModal from "../Modal/ErrorModal";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const [fail, setFail] = useState({ open: false, message: "" });
  const history = useHistory();

  const handleClose = () => {
    setFail({ open: false, message: "" });
  };

  return (
    <Formik
      initialValues={{
        firstName: "Alonso",
        lastName: "Barrios",
        email: "alonso.barrios@utec.edu.pe",
        username: "alonso804",
        password: "1234",
        /*
         *firstName: "",
         *lastName: "",
         *email: "",
         *username: "",
         *password: "",
         */
      }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Email requerido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Dirección email inválida";
        }

        if (!values.firstName) {
          errors.firstName = "Nombre requerido";
        }

        if (!values.lastName) {
          errors.lastName = "Apellido requerido";
        }

        if (!values.username) {
          errors.username = "Username requerido";
        }

        if (!values.password) {
          errors.password = "Contraseña requerida";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        AuthServices.signup(values)
          .then((res) => {
            StorageService.setJWT(res.data.token);
            console.log("saved jwt: ", StorageService.getJWT());
            console.log("Registrado");
            history.push("/");
          })
          .catch((err) => {
            console.log("[Sign Up] Error al registrar");
            console.error(err);
            setFail({ open: true, message: err.response.data.message });
          });
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                fullWidth
                name="firstName"
                variant="outlined"
                id="firstName"
                label="First Name"
                autoFocus
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName && touched.firstName}
              />
              <FormHelperText style={{ color: "red" }}>
                {errors.firstName && touched.firstName && errors.firstName}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                autoComplete="lname"
                onBlur={handleBlur}
                error={errors.lastName && touched.lastName}
              />
              <FormHelperText style={{ color: "red" }}>
                {errors.lastName && touched.lastName && errors.lastName}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
              />
              <FormHelperText style={{ color: "red" }}>
                {errors.email && touched.email && errors.email}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username && touched.username}
              />
              <FormHelperText style={{ color: "red" }}>
                {errors.username && touched.username && errors.username}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                autoComplete="current-password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password}
              />
              <FormHelperText style={{ color: "red" }}>
                {errors.password && touched.password && errors.password}
              </FormHelperText>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            className={classes.submit}
          >
            Registrarte
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
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

export default SignupForm;
