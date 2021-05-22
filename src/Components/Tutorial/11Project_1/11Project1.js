// Challenge
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let time = new Date(2020, 9, 9, 1);
let hrs = time.getHours();
let greeting = "";
let csstyle = {};

if (hrs >= 1 && hrs <= 11) {
  greeting = "Good Morning";
  csstyle.color = "green";
}
if (hrs >= 12 && hrs <= 17) {
  greeting = "Good Afternoon";
  csstyle.color = "purple";
}
if (hrs >= 18 && hrs <= 23) {
  greeting = "Good Night";
  csstyle.color = "red";
}

let heading = {
  color: "blue",
  textTransform: "capitilize",
  textAlign: "center",
  backgroundColor: "yellow",
  width: "600px",
  height: "100px",
  padding: "25px",
  margin: "150px auto",
  borderRadius: "10px",
  fontFamily: "sans-serif",
};

ReactDom.render(
  <>
    <h1 style={heading}>
      Hello Sir, <span style={csstyle}> {greeting}</span>
    </h1>
  </>,
  document.getElementById("root")
);
