import React, { useEffect, useState } from "react";
import ContentTable from "../../components/ContentTable/ContentTable";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { DriverServices } from "../../services/DriverServices";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Setting = () => {
  const history = useHistory();
  const [drivers, setDrivers] = useState([]);

  const getAllDrivers = () => {
    DriverServices.getAll()
      .then((res) => {
        setDrivers(res.data.drivers);
      })
      .catch((err) => {
        if (err.response.data.message === "No hay conductores") {
          setDrivers([]);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    getAllDrivers();
  }, []);

  const createDriver = (e) => {
    e.preventDefault();
    history.push("/administration/create-driver");
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: "0",
        }}
      >
        <Typography component="h1" variant="h5">
          Administración
        </Typography>

        <Button variant="contained" color="primary" onClick={createDriver}>
          Crear Conductor
        </Button>
      </Container>
      {drivers.length === 0 ? (
        <Typography component="h2" variant="h5" style={{ textAlign: "center" }}>
          No hay conductores
        </Typography>
      ) : (
        <ContentTable
          data={drivers}
          detailPath={"/administration/edit-driver"}
          remove={true}
          getData={getAllDrivers}
        />
      )}
    </>
  );
};

export default Setting;
