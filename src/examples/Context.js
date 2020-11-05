import React, { useState, useMemo } from "react";
import { Button } from "@material-ui/core";
import InnerContext from "../components/InnerContext";
import AlertComponent from "../components/Alert";
import AlertProvider from "./Context/AlertContext";

const ContextComponent = () => {
  const [colored, setColored] = useState(false);

  const style = useMemo(() => {
    console.log("colored");
    return {
      color: colored ? "#5976a0" : "#000000",
    };
  }, [colored]);

  return (
    <>
      <AlertProvider>
        <h2 style={style}>useContext Hook</h2>
        <AlertComponent></AlertComponent>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setColored((prev) => !prev)}
        >
          Зминити Стиль
        </Button>
        <br />
        <InnerContext></InnerContext>
      </AlertProvider>
    </>
  );
};

export default ContextComponent;
