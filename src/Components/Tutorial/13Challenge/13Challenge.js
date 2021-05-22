// Challenge re writing In component of Last Challenge.
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";

ReactDom.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

//--------------------------------- Span.jsx------------------------------------------
// import React from "react";

// let time = new Date(2020, 9, 9, 1);
// let hrs = time.getHours();
// let greeting = "";
// let csstyle = {};

// if (hrs >= 1 && hrs <= 11) {
//   greeting = "Good Morning";
//   csstyle.color = "green";
// }
// if (hrs >= 12 && hrs <= 17) {
//   greeting = "Good Afternoon";
//   csstyle.color = "purple";
// }
// if (hrs >= 18 && hrs <= 23) {
//   greeting = "Good Night";
//   csstyle.color = "red";
// }

// let heading = {
//   color: "blue",
//   textTransform: "capitilize",
//   textAlign: "center",
//   backgroundColor: "yellow",
//   width: "600px",
//   height: "100px",
//   padding: "25px",
//   margin: "150px auto",
//   borderRadius: "10px",
//   fontFamily: "sans-serif",
// };

// function Span() {
//   return <span style={csstyle}> {greeting}</span>;
// }

// export default Span;

//---------- Heading.jsx-----------//
// import React from "react";
// import Span from "./Span";

// let heading = {
//   color: "blue",
//   textTransform: "capitilize",
//   textAlign: "center",
//   fontFamily: "sans-serif",
// };

// function Heading() {
//   return (
//     <h1 style={heading}>
//       Hello Sir, <Span />
//     </h1>
//   );
// }

// export default Heading;

//------------- Div.jsx----------//
// import React from "react";
// import Heading from "./Heading";

// let div_style = {
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

// function Div() {
//   return (
//     <div style={div_style}>
//       <Heading />
//     </div>
//   );
// }

// export default Div;

//---------- App.js-----------------
// import React from "react";
// import Div from "./Div.jsx";

// function App() {
//   return (
//     <>
//       <Div />
//     </>
//   );
// }

// export default App;

//--------------- Css file---------------------------------
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   background-color: #0093e9;
//   background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
// }
