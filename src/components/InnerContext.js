import React from "react";
import { Button } from "@material-ui/core";
import { useAlert } from "../examples/Context/AlertContext";

const InnerContext = () => {
  const {toggle} = useAlert()
  return (
    <Button variant="outlined" color="secondary" onClick={toggle}>
      Показати Alert
    </Button>
  );
};

export default InnerContext;
