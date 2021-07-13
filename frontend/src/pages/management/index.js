import React from "react";
import ContentTable from "../../components/ContentTable/ContentTable";

function createData(
  _id,
  name,
  dni,
  vehiclePlate,
  business,
  phoneNumber,
  startDate,
  endDate
) {
  return {
    _id,
    name,
    dni,
    vehiclePlate,
    business,
    phoneNumber,
    startDate,
    endDate,
  };
}

const data = [
  createData(
    1,
    "Pedro",
    78945612,
    "AEA-789",
    "San Fernando",
    978254458,
    "2021-07-20",
    "2021-07-21"
  ),
  createData(
    2,
    "Juan",
    43678529,
    "PGR-438",
    "Linio",
    984568245,
    "2021-07-20",
    "2021-07-21"
  ),
  createData(
    3,
    "Luis",
    56874239,
    "TBH-488",
    "Nutrishop",
    964785214,
    "2021-07-20",
    "2021-07-21"
  ),
  createData(
    4,
    "Alonso",
    78569423,
    "CPP-348",
    "Amazon",
    967458245,
    "2021-07-20",
    "2021-07-21"
  ),
  createData(
    5,
    "Pepe",
    76842594,
    "PBJ-112",
    "Polvos Azules",
    912445845,
    "2021-07-20",
    "2021-07-21"
  ),
];

export default function Management() {
  return (
    <>
      <ContentTable data={data} detailPath={"/management/vehicular"} />
    </>
  );
}
