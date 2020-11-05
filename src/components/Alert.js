import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useAlert } from "../examples/Context/AlertContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertComponent = () => {
  const classes = useStyles();

  const { isVisible, toggle } = useAlert();

  return (
    <>
      {!isVisible ? null : (
        <div className={classes.root}>
          <Alert severity="warning" onClick={toggle}>
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
            
          </Alert>
        </div>
      )}
    </>
  );
};
export default AlertComponent;
