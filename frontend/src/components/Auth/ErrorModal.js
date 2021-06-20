import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ErrorModal = ({
  fail = false,
  message = "Hay un error",
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={fail}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Ups!</h2>
          <p id="simple-modal-description">{message}</p>
        </div>
      </Modal>
    </div>
  );
};
export default ErrorModal;
