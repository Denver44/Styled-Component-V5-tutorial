// --------------  03   To Render Multiple Elements inside ReactDOM.render()-----
import React from "react";
import ReactDOM from "react-dom";

// The render element can only renderone element only.

//---------------------------------------- 1st way
//so to solve this problem we can use a div tag and inside that div tag we can put as many element we want without using comma to sperate elment.

ReactDOM.render(
  <div>
    <h1> Durgesh Rai!! </h1>
    <p>He is a very good boy</p>
    <h2>Mother name geeta rai</h2>
  </div>,
  document.getElementById("root")
);

//------------- 2nd way
// We can aslo make an array like we do let arr = ["durgesh","vishal"]
// but we have to sperate element by comma (Comma is MUST)

ReactDOM.render(
  [
    <h1> Avan Rai!! </h1>,
    <h2>Geeta rai </h2>,
    <h3>Priya rai</h3>,
    <h4> Pooja Rai </h4>,
    <h5>Durgesh rai</h5>,
  ],
  document.getElementById("root")
);
