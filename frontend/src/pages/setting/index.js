import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useHistory } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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

  const createUser = (e) => {
    e.preventDefault();
    history.push("/create-setting");
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={createUser}
        >
          Crear Usuario
        </Button>
      </Container>
      {drivers.length === 0 ? (
        <h2>No hay conductores</h2>
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Fecha de Inicio</TableCell>
              <TableCell>Fecha de término</TableCell>
              <TableCell>Detalle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver._id}>
                <TableCell>{driver.name}</TableCell>
                <TableCell>{driver.dni}</TableCell>
                <TableCell>{driver.business}</TableCell>
                <TableCell>{driver.startDate}</TableCell>
                <TableCell>{driver.endDate}</TableCell>
                <TableCell>detalle</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default Setting;
