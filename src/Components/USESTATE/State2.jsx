import React, { useState } from "react";

// It will render always thats why we used function inside a state.
// const func = () => {
//   console.log("It Run everytime");
//   return 5;
// };

const State2 = () => {
  // const [count, setcount] = useState(func());

  // At time of complex compution use below method its safe.
  // Use this when we have to do complex compution always pass iside a function as it only run for one time and dont make your process slow.

  const [count, setcount] = useState(() => {
    console.log("Runs only Once"); // it will run for only once
    return 5;
  });

  const mul = () => {
    setcount((prevcount) => prevcount * 2);
  };

  const div = () => {
    setcount((prevcount) => prevcount / 2);
  };

  return (
    <>
      <button onClick={div}> /2 </button>
      <span>{count}</span> <button onClick={mul}> X2 </button>
    </>
  );
};

export default State2;
