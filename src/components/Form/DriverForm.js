import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "react-avatar";
import { Formik } from "formik";
import { FormHelperText } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { DriverServices } from "../../services/DriverServices";
import ErrorModal from "../Modal/ErrorModal";
import SuccessModal from "../Modal/SuccessModal";
import ReturnButton from "../Button/ReturnButton";
import { inputError, errorMessage } from "./errors";
import SubmitButton from "../Button/SubmitButton";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(1),
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  submit: {
    width: "100%",
    margin: theme.spacing(3, 0, 2),
  },
}));

const DriverForm = ({
  initialValues = {
    /*
     *name: "Alonso Barrios",
     *dni: "72226665",
     *vehiclePlate: "Y1C-566",
     *phoneNumber: "946248222",
     *startDate: "2021-07-07",
     *endDate: "2021-07-15",
     *business: "Mi negocio",
     *observations: "Ninguna observacion",
     */
    name: "",
    dni: "",
    vehiclePlate: "",
    phoneNumber: "",
    startDate: "",
    endDate: "",
    business: "",
    observations: "",
  },
  action = "Registrar",
  driverId = null,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [fail, setFail] = useState({ open: false, message: "" });
  const [success, setSuccess] = useState({ open: false, message: "" });
  const [loading, setLoading] = useState(false);

  const createDriver = (values) => {
    setLoading(true);
    DriverServices.create(values)
      .then(() => {
        setSuccess({
          open: true,
          message: "Conductor creado exitosamente",
        });
      })
      .catch((err) => {
        console.log(err);
        setFail({ open: true, message: err.response.data.message });
      });
    setLoading(false);
  };

  const updateDriver = (values) => {
    setLoading(true);
    DriverServices.update(driverId, values)
      .then(() => {
        setSuccess({
          open: true,
          message: "Conductor actualizado exitosamente",
        });
      })
      .catch((err) => {
        console.log(err);
        setFail({ open: true, message: err.response.data.message });
      });
    setLoading(false);
  };

  const handleCloseFail = () => {
    setFail({ open: false, message: "" });
  };

  const handleCloseSuccess = () => {
    history.push("/administration");
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Nombre del conductor es requerido";
        }

        if (!values.dni) {
          errors.dni = "DNI del conductor es requerida";
        }

        if (!values.vehiclePlate) {
          errors.vehiclePlate = "Placa de vehículo es requerida";
        }

        if (!values.phoneNumber) {
          errors.phoneNumber = "Número de teléfono es requerida";
        } else if (!/^\d+$/i.test(values.phoneNumber)) {
          errors.phoneNumber = "Número de teléfono es solo puede ser número";
        }

        if (!values.startDate) {
          errors.startDate = "Fecha de inicio es requerida";
        }

        if (!values.endDate) {
          errors.endDate = "Fecha de fin es requerida";
        } else if (values.startDate > values.endDate) {
          errors.endDate = "Fecha de fin no puede ser menor a fecha de inicio";
        }
        if (!values.business) {
          errors.business = "Empresa es requerida";
        }

        if (!values.observations) {
          errors.observations = "Observaciones es requerida";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        action === "Registrar" ? createDriver(values) : updateDriver(values);
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
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                name="name"
                label="Nombre del conductor"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={inputError(errors, touched, "name")}
              />
              <FormHelperText style={{ color: "red" }}>
                {errorMessage(errors, touched, "name")}
              </FormHelperText>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="dni"
                label="DNI del conductor"
                name="dni"
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
                error={inputError(errors, touched, "dni")}
              />
              <FormHelperText style={{ color: "red" }}>
                {errorMessage(errors, touched, "dni")}
              </FormHelperText>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="vehiclePlate"
                label="Placa del vehículo"
                name="vehiclePlate"
                value={values.vehiclePlate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={inputError(errors, touched, "vehiclePlate")}
              />
              <FormHelperText style={{ color: "red" }}>
                {errorMessage(errors, touched, "vehiclePlate")}
              </FormHelperText>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="phoneNumber"
                label="Número de teléfono"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={inputError(errors, touched, "phoneNumber")}
              />
              <FormHelperText style={{ color: "red" }}>
                {errorMessage(errors, touched, "phoneNumber")}
              </FormHelperText>
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="startDate"
                    label="Fecha de inicio"
                    name="startDate"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={values.startDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={inputError(errors, touched, "startDate")}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {errorMessage(errors, touched, "startDate")}
                  </FormHelperText>
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="endDate"
                    label="Fecha de fin"
                    name="endDate"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={values.endDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={inputError(errors, touched, "endDate")}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {errorMessage(errors, touched, "endDate")}
                  </FormHelperText>
                </Grid>
              </Grid>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="business"
                label="Empresa contratante"
                name="business"
                value={values.business}
                onChange={handleChange}
                onBlur={handleBlur}
                error={inputError(errors, touched, "business")}
              />
              <FormHelperText style={{ color: "red" }}>
                {errorMessage(errors, touched, "business")}
              </FormHelperText>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="observations"
                label="Observaciones"
                name="observations"
                value={values.observations}
                onChange={handleChange}
                onBlur={handleBlur}
                error={inputError(errors, touched, "observations")}
              />
              <FormHelperText style={{ color: "red" }}>
                {errorMessage(errors, touched, "observations")}
              </FormHelperText>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              alignContent="center"
              direction="column"
              spacing={2}
            >
              <Grid item>
                <Avatar
                  size="200"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-2-1583234102.jpg"
                  round={true}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  style={{ width: "100%" }}
                >
                  Cambiar Avatar
                  <input type="file" hidden />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  style={{ width: "100%" }}
                >
                  Adjuntar contrato físico
                  <input type="file" hidden />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item spacing={1} style={{ width: "50%" }}>
            <Grid item xs={12} sm={6}>
              <ReturnButton path="/administration" width="100%" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SubmitButton
                loading={loading}
                text={action}
                disabled={isSubmitting}
              />
            </Grid>
          </Grid>
          <ErrorModal
            open={fail.open}
            message={fail.message}
            handleClose={handleCloseFail}
          />
          <SuccessModal
            open={success.open}
            message={success.message}
            handleClose={handleCloseSuccess}
          />
        </form>
      )}
    </Formik>
  );
};

export default DriverForm;
