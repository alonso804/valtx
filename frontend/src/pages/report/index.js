import React from "react";
import ContentTable from "../../components/ContentTable/ContentTable";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import data from "../../assets/data.json";

export default function Report() {
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
          Reportes
        </Typography>
      </Container>
      <ContentTable data={data.trucks} detailPath={"/management/vehicular"} />
    </>
  );
}
