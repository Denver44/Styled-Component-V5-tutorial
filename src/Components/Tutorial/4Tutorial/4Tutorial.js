// --------------Understanding React Fragment in React JS -------------
import React from "react";
import ReactDOM from "react-dom";

// As here we write div which will create a div inside our main div  id=root 
// so that create a---- PROBLEM---- at time fo--- flexbox-----so to resolve
// this we used React.fragment and no need to use then array and comma .


// -----------------------1st way-------------------
ReactDOM.render(
  <React.Fragment>
    <h1> Durgesh Rai!! </h1><p> He is a very good boy </p>
    <h2>Mother name geeta rai </h2>
  </React.Fragment>,
  document.getElementById("root")
);


//------------- 2nd way without writing React.fragment keyword
// ------------- NO need of comma to spearte elelment
ReactDOM.render(
  <>
    <h1> Durgesh Rai!! </h1><p> He is a very good boy </p> 
    <h2> Mother name geeta rai </h2>
  </>,
  document.getElementById("root")
);
