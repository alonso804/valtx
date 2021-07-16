import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import DriverForm from "../../../components/Form/DriverForm";
import { useParams } from "react-router-dom";
import { DriverServices } from "../../../services/DriverServices";
import Loader from "react-loader-spinner";

const EditDriver = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  const getDriver = () => {
    DriverServices.get(id)
      .then((res) => {
        setDriver(res.data.driver);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDriver();
  }, []);

  if (!driver) {
    return (
      <Box pt={4} style={{ display: "flex", justifyContent: "center" }}>
        <Loader type="Puff" color="#E2E5EE" height={100} width={100} />
      </Box>
    );
  }

  return (
    <>
      <CssBaseline />
      <DriverForm
        initialValues={{
          name: driver.name,
          dni: driver.dni,
          vehiclePlate: driver.vehiclePlate,
          phoneNumber: driver.phoneNumber,
          startDate: driver.startDate,
          endDate: driver.endDate,
          business: driver.business,
          observations: driver.observations,
        }}
        action="Actualizar"
        driverId={id}
      />
    </>
  );
};

export default EditDriver;
