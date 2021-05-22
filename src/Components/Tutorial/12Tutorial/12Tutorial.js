// ---------------------------React Components --------------------------
// This is also way to make Heading.jsx file ,Para file and list file and the import and use this lke this.
// or we can make app.jsx file in that we will import above thing and then we import only file app.jsx so then our index.jsx will look more clean.
import React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading.jsx";
import Para from "./Para.jsx";
import List from "./List.jsx";

ReactDom.render(
  <>
    <Heading />
    <Para />
    <List />
  </>,
  document.getElementById("root")
);

//Create a file The Function name and file name must be same as Function name and First letter must be Capital.

// ----------------------- PARAGRPH FILE------------------

// import React from "react";

// function Para() {
//   return <p>This is my Fav Series on Netflix</p>;
// }

// export default Para;

//---------------------- HEADING FILE-----------------------

// import React from "react";

// function Heading() {
//   return <h1> My name is Durgesh rai</h1>;
// }

// export default Heading;

//-------------------- LIST------------------------------

// import React from "react";

// function List() {
//   return (
//     <ol>
//       <li>Stranger Things</li>
//       <li>Breaking Bad</li>
//       <li>Money Heist</li>
//       <li>Elite</li>
//     </ol>
//   );
// }

// export default List;


//-------------------- CREATE A APP.JSX FILE----------------------//

// import React from "react";
// import Heading from "./Heading.jsx";
// import Para from "./Para.jsx";
// import List from "./List.jsx";

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//     </>
//   );
// }

// export default App;


// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App.jsx";

// ReactDom.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// );


