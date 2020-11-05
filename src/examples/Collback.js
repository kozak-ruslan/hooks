import React, { useCallback, useState, useMemo } from "react";
import { Button } from "@material-ui/core";
import ListItems from "./CollbackListItems";

const CollBackComponent = () => {
  const [count, setCount] = useState(5);
  const [colored, setColored] = useState(false);

  const style = useMemo(() => {
    console.log("colored");
    return {
      color: colored ? "#5976a0" : "#000000",
    };
  }, [colored]);

  const generateItems = useCallback(() => {
    console.log("generateItems");
    const arr = new Array(count).fill("").map((val, i) => `element ${i + 1}`);
    console.log(arr);
    return arr;
  }, [count]);

  return (
    <>
      <h2 style={style}>useCallback Hook</h2>
      <div>Обчислюване значення {count}</div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Збільшити
      </Button>
      <br />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setColored((prev) => !prev)}
      >
        Зминити Стиль
      </Button>
      <ListItems getItems={generateItems}></ListItems>
    </>
  );
};

export default CollBackComponent;
