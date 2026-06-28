import React, { useState } from 'react';

const Counter = () => {
  // let count = 0
  const [count, setCount] = useState(0)

  const handleInc = () => {
    setCount(count + 1)
    console.log("count", count)
  }

  return (
    <div>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={handleInc}>Inc</button>
    </div>
  );
};

export default Counter;
