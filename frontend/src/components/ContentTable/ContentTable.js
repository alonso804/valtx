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
import LaunchIcon from "@material-ui/icons/Launch";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import { DriverServices } from "../../services/DriverServices";

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "#c4c4c4",
    color: "#000",
    borderRight: "1px solid black",
  },
  body: {
    fontSize: 14,
    borderRight: "1px solid black",
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#cbe2ff",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const formatDate = (date) => {
  let tempDate = date.split("-");
  return tempDate[2] + "-" + tempDate[1] + "-" + tempDate[0];
};

const ContentTable = ({ data, detailPath, remove, getData }) => {
  const classes = useStyles();
  const history = useHistory();

  const filter = (e) => {
    e.preventDefault();
    console.log("Presionaste detalle");
  };

  const deleteDriver = (driverId) => {
    DriverServices.delete(driverId)
      .then((res) => {
        console.log(res.data);
        //history.go(0);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Button variant="contained" onClick={filter}>
          <SearchIcon />
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
              <StyledTableCell align="center">Fecha de inicio</StyledTableCell>
              <StyledTableCell align="center">Fecha de término</StyledTableCell>
              <StyledTableCell align="center" style={{ borderRight: "none" }}>
                Detalle
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              return (
                <StyledTableRow key={item._id}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.dni}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.vehiclePlate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.business}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatDate(item.startDate)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {formatDate(item.endDate)}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{ borderRight: "none" }}
                  >
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(`${detailPath}/${item._id}`);
                      }}
                    >
                      <LaunchIcon />
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteDriver(item._id);
                      }}
                      style={{ display: `${remove ? "inline-flex" : "none"}` }}
                    >
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ContentTable;
