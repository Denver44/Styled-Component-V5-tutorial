import React from "react";
import ReactDom from "react-dom";
// import { add, sub, mul, div } from "./App.jsx";
import * as calc from "./App.jsx";

// ReactDom.render(
//   <>
//     <h1>Sum of 2 Number:- {add(10, 20)}</h1>
//     <h1>Subtraction of 2 Number:- {sub(100, 20)}</h1>
//     <h1>Multiplication of 2 Number:- {mul(10, 2)}</h1>
//     <h1>Division of 2 Number:- {div(50, 2)}</h1>
//   </>,

//   document.getElementById("root")
// );


ReactDom.render(
  <>
    <h1>Sum of 2 Number:- {calc.add(10, 20)}</h1>
    <h1>Subtraction of 2 Number:- {calc.sub(100, 20)}</h1>
    <h1>Multiplication of 2 Number:- {calc.mul(10, 2)}</h1>
    <h1>Division of 2 Number:- {calc.div(50, 2)}</h1>
  </>,

  document.getElementById("root")
);


//--------------------- App.jsx------------------//
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  let c = a / b;
  return c.toFixed(2);
}

export { add, sub, mul, div };
