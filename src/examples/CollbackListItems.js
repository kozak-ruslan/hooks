import React, {useState, useEffect } from "react";

const ListItems = ({getItems}) => {
  
  const [items, setItems] = useState([]);
  useEffect(()=> {
    console.log('start useEffect ListItems!!!!!!!!')
    setItems(getItems())
  }, [getItems])
  
  console.log('start render ListItems!!!!!!!!')
  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};

//export default ListItems;
export default React.memo(ListItems);