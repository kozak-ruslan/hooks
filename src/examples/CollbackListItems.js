import React, {useState, useEffect } from "react";

const ListItems = ({getItems}) => {
  const [items, setItems] = useState([]);
  useEffect(()=> {
    setItems(getItems())
  }, [getItems])

  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};

export default ListItems;
