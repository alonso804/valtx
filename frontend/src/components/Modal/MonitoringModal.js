import React, { useState } from "react";
import useStyles from "./useStyles";
import Modal from "@material-ui/core/Modal";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

const MonitoringModal = ({
  open = false,
  title,
  firstData,
  secondData,
  handleClose,
  alertMessage,
}) => {
  const classes = useStyles();
  const [alert, setAlert] = useState(false);

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
          <h2 id="simple-modal-title" style={{ textAlign: "center" }}>
            {title}
          </h2>

          <p id="simple-modal-description">{firstData.name}</p>
          <p id="simple-modal-description" className={classes.data}>
            {firstData.data}
          </p>

          <p id="simple-modal-description">{secondData.name}</p>
          <p id="simple-modal-description" className={classes.data}>
            {secondData.data}
          </p>

          <div style={{ textAlign: "right" }}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setAlert(true);
                setTimeout(() => {
                  setAlert(false);
                }, 2000);
              }}
            >
              {" "}
              <ErrorOutlineIcon color="error" fontSize="large" />
            </Button>
            <Alert
              style={{
                display: alert ? "flex" : "none",
                position: "absolute",
                right: "30px",
              }}
              severity="error"
            >
              Se ha alertado a Carlos Castro que:
              <br /> {alertMessage}
            </Alert>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default MonitoringModal;
