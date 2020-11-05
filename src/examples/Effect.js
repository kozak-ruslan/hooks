import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
const EffectComponent = () => {
  const [type, setType] = useState("users");

  const [data, setData] = useState([]);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

// useEffect спрацьовує при обновленні змінної type
  useEffect(() => {
    console.log("useEffect reload variable type");
    fetch(`https://jsonplaceholder.typicode.com/${type}/10`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  // useEffect work like componentDidMound and componentWillUnMound (destroy)
  useEffect(() => {
    console.log("useEffect work like componentDidMound !!!");
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      console.log("useEffect work like componentWillUnMound (destroy) !!!");
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  const mouseMoveHandler = (e) => {
    setPosition({
      x: e.offsetX,
      y: e.offsetY,
    });
  };

  return (
    <>
      <h2>EffectComponent</h2>
      <div>
        Координати мишки
        {JSON.stringify(position, null, 2)}
      </div>
      <div> Тип даних: {type}</div>
      <div className="container-btn">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setType("users")}
        >
          users
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setType("todos")}
        >
          todos
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setType("posts")}
        >
          posts
        </Button>
      </div>
      Вивід даних
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  );
};
export default EffectComponent;
