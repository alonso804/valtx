import React from "react";
import useStyles from "./useStyles";
import Modal from "@material-ui/core/Modal";

const ErrorModal = ({
  open = false,
  message = "Hay un error",
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
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
