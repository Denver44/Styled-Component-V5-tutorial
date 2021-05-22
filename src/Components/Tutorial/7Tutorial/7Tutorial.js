// -------------------------ES6 Template Literals in JSX in ReactJS---------------------
import React from "react";
import ReactDom from "react-dom";

const fname = "Durgesh";
const lname = "Rai";

// This is Template Literal which we use in Javscrript
// console.log(` hello ${world}`)
// use backtick and then use ${}
// In Template literal we can write between Backtick and it will display.

ReactDom.render(
  <>
    <h1> Hello I m {`${fname} ${lname}`} </h1>
    <p> My lucky number is {parseInt(100 * Math.random(100))} </p>
  </>,
  document.getElementById("root")
);
