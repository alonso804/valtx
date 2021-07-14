import React from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ReturnButton = ({ path, width }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={(e) => {
        e.preventDefault();
        history.push(path);
      }}
      className={classes.submit}
      style={{ width: width }}
    >
      <ArrowBackIosIcon fontSize="small" /> Regresar
    </Button>
  );
};

export default ReturnButton;
