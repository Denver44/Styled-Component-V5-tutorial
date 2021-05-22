//------------------------------------ Basic 02 JSX in react-----------------------//
import React from "react";
import ReactDOM from "react-dom";

// 1st Way To write and it Feasible.
ReactDOM.render( <h1> Durgesh Rai!! </h1>, document.getElementById('root'));

 <h1> Durgesh Rai!! </h1> // this is actually called Jsx (Javascript Expression)


// 2nd Way to write if we dont import React from 'react" 
ReactDOM.render( /*#__PURE__*/ React.createElement("h1", null, " Bapp hai tera Rai!! "), document.getElementById('root'));




// 3rd Way Using vanilla Javascript
let h1 = document.createElement('h1');
h1.innerHTML = `DURGESH RAI IS NOW LEARNING REACTJS`
document.getElementById('root').appendChild(h1);
