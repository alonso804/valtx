import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { DriverServices } from "../../services/DriverServices";

const Setting = () => {
  const history = useHistory();
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    DriverServices.getAll()
      .then((res) => {
        setDrivers(res.data.drivers);
      })
      .catch((err) => {
        console.log(err);
      });
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
          flexDirection: "row-reverse",
          marginBottom: "20px",
          padding: "0",
        }}
      >
        <Button variant="contained" color="primary" onClick={createDriver}>
          Crear Conductor
        </Button>
      </Container>
      {drivers.length === 0 ? (
        <h2>No hay conductores</h2>
      ) : (
        <Table
          data={drivers}
          detailPath={"/administration/edit-driver"}
          delete={true}
        />
      )}
    </>
  );
};

export default Setting;
