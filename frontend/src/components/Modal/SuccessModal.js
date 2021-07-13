import React from "react";
import useStyles from "./useStyles";
import Modal from "@material-ui/core/Modal";

const SuccessModal = ({ open = false, message = "Éxito", handleClose }) => {
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
          <h2 id="simple-modal-title">{message}!</h2>
        </div>
      </Modal>
    </div>
  );
};
export default SuccessModal;
