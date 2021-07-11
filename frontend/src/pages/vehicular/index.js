import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#c4c4c4",
    color: "black",
    borderRight: "1px solid black",
  },
  body: {
    fontSize: 14,
    borderRight: "1px solid black",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#cbe2ff",
    },
  },
}))(TableRow);

function createData(conductor, dni, placa, empresa, telefono, fecha, detalle) {
  return { conductor, dni, placa, empresa, telefono, fecha, detalle};
}

const rows = [
  createData("Pedro", 78945612, "AEA-789", "San Fernando", 978254458,"20-07-2021"),
  createData("Juan", 43678529, "PGR-438", "Linio", 984568245,"20-07-2021"),
  createData("Luis", 56874239, "TBH-488", "Nutrishop", 964785214,"20-07-2021"),
  createData("Alonso", 78569423, "CPP-348", "Amazon", 967458245,"20-07-2021"),
  createData("Pepe", 76842594, "PBJ-112", "Polvos Azules", 912445845,"20-07-2021"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Vehicular() {
  const classes = useStyles();
  const history = useHistory();

  const seeDetails = (e) => {
    e.preventDefault();
    history.push("/vehicular");
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row-reverse",
          marginBottom: "20px",
          padding: "0",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="white"
          onClick={console.log("Presionaste detalle")}
        >
          <img src="https://i.ibb.co/VStP8Br/lupa.png" alt="" height="30" width="30" />
        </Button>
      </Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Conductor</StyledTableCell>
              <StyledTableCell align="center">DNI</StyledTableCell>
              <StyledTableCell align="center">Placa</StyledTableCell>
              <StyledTableCell align="center">Empresa</StyledTableCell>
              <StyledTableCell align="center">Telefono</StyledTableCell>
              <StyledTableCell align="center">Fecha</StyledTableCell>
              <StyledTableCell align="center">Detalle</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.conductor}>
                <StyledTableCell component="th" scope="row">
                  {row.conductor}
                </StyledTableCell>
                <StyledTableCell align="center">{row.dni}</StyledTableCell>
                <StyledTableCell align="center">{row.placa}</StyledTableCell>
                <StyledTableCell align="center">{row.empresa}</StyledTableCell>
                <StyledTableCell align="center">{row.telefono}</StyledTableCell>
                <StyledTableCell align="center">{row.fecha}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="#c4c4c4"
                    onClick={seeDetails}
                  >
                    <img src="https://i.ibb.co/VpmZnFN/detalle.png" alt="" />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
