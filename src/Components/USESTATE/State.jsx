import React, { useState } from "react";

//!Important =This is not a good way to upadte the value as if we call more than setcount it will only act for one thats why we dont use this method. see tut 2.

const State = () => {
  const [count, setcount] = useState(5);
  const decrement = () => {
    setcount(count - 1);
  };

  const increment = () => {
    setcount(count + 1);
    setcount(count + 1); // !Important both only work for one time the latest will work but the value will be chnaged for on time only not two times to as here count is 5 for both times thats why it work for ont time but if we take prevcount then we get diff result.
  };

  return (
    <>
      <button onClick={decrement}> - </button>
      <span>{count}</span> <button onClick={increment}> + </button>
    </>
  );
};

export default State;

//1.It should Alwys used inside  a function.
//2.Never used useState in a conditonally Statemnt like if else or terenary not in loops.
//3.Always at th top level of the fucntions.
// ------------ DEFINITON OF STATE ----------
//4.React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders
//5.Usestate alawys return a array of two value.
//6.1st is always current state.
//7.2nd one is a function which help us to update the current state.
//8. It will alawys re-render our compnent with new value.
