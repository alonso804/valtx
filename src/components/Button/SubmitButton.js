import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  submit: {
    width: "100%",
    margin: theme.spacing(3, 0, 2),
  },
}));

const SubmitButton = ({ loading, text, disabled }) => {
  const classes = useStyles();
  const loader = (
    <Loader
      type="TailSpin"
      color="#E2E5EE"
      height={20}
      width={20}
      style={{ marginTop: "5px" }}
    />
  );

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      disabled={disabled}
      className={classes.submit}
    >
      {loading ? loader : text}
    </Button>
  );
};

export default SubmitButton;
