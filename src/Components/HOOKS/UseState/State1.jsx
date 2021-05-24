import React, { useState } from "react";

// Correct way to update the value of the state. use this function version which is much better and reliable.
const State1 = () => {
  const [count, setcount] = useState(5);

  const increment = () => {
    setcount((prevcount) => prevcount + 1);
    setcount((prevcount) => prevcount + 1);
  };

  const decrement = () => {
    setcount((prevcount) => prevcount - 1);
  };

  return (
    <>
      <button onClick={decrement}> - </button>
      <span>{count}</span> <button onClick={increment}> + </button>
    </>
  );
};

export default State1;
