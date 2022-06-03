import React, { memo, useMemo, useState } from 'react';

const List = memo(({items})=>{
  console.log('render children')

  return (
    items.map((el)=>(<div key={el}>{el}</div>))
  )
});

const Memo = () => {
  const [state, setState] = useState(1);
  const data = useMemo(()=>[1,2,3,4,5], []);
  console.log('render parent')

  return (
    <div className="box">
      <h1>
        Hello, <span>{state}</span>
      </h1>
      <button onClick={() => setState(state+1)}>increment </button>
      <List items={data} />
    </div>
  )
}

export default Memo;