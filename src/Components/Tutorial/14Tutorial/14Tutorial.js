// --------------------------------------------- IMPORT EXPORT TUTORIAL -----------------------------------------
import React from "react";
import ReactDom from "react-dom";
import name, { name2, sur } from "./App.jsx";
// import * as que from './App.jsx';  This is also way to import but not usally used the wild card
// To import the non-default value we have to write in {name2}  like this and we can add as many as by putting comma in betwwen But the name must be same as int export file otherwise we will get error.

// This way we import and we have to write in curly braces to see it output {name}
ReactDom.render(
  <>
    <h1>{name}</h1>
    <h1>{name2}</h1>
    <h1>{sur()}</h1>
  </>,

  document.getElementById("root")
);

// ReactDom.render(
//   <>
//     <h1>{que.default}</h1>  // For the Default one we have to write default in place of name  here the que get the file in object so we have to use . operator to access the element
//     <h1>{que.name2}</h1>
//     <h1>{que.sur()}</h1>
//   </>,

//   document.getElementById("root")
// );


//------------------ App.jsx -------------------------------// 
// const name = "Durgesh Coder";
// const name2 = "Vishal Coder";

// let surname = "rai";
// function sur() {
//   return surname;
// }

// export default name; // there will be only default in the import other varibale we can export it but not as a default

// export { name2, sur };
