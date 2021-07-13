import React from "react";
import Typography from "@material-ui/core/Typography";
//import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        VTruck
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
