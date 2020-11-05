import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@material-ui/core";

const complexCompute = (numb) => {
  let i = 1;
  while (i < 1000000000) i++;
  return numb * 2;
};

const MemoComponent = () => {
  const [count, setCount] = useState(5);
  const [colored, setColored] = useState(false);
  const style = useMemo(() => {
    console.log("colored");
    return {
      color: colored ? "#5976a0" : "#000000",
    };
  }, [colored]);

  useEffect(()=>{
    console.log("Edit colored");
  }, [style]);

  const complex = useMemo(() => complexCompute(count), [count]);
  return (
    <>
      <h2 style={style}>useEffect Hook</h2>
      <div>Обчислюване значення {complex}</div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Збільшити
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Зменшити
      </Button>
      <br />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setColored((prev) => !prev)}
      >
        Зминити Стиль
      </Button>
    </>
  );
};

export default MemoComponent;
