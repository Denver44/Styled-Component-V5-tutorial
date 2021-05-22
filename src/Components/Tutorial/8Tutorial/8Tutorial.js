//--------------- JSX Attributes in ReactJS
import React from "react";
import ReactDom from "react-dom";

// The HTML attributes now they are called Jsx attributes.

// 1.The only things we have to keep our eye on this.
// that the attribute is made up of two senteces then we have to write that attribute in camelCase. That much only this is Important.
// The camelCase Example:- contentEditable  this is way we have to write attributes in Jsx.

//2. For img tag we must write alt attribute also.
//3. For the img tage it doesnt have any closing tag </img> like this so on react js the img tage look like this <img/>

let name = "Durgesh";
let link1 = "https://source.unsplash.com/user/erondu/300x300";
let link2 = "https://source.unsplash.com/collection/190727/300x300";
let link3 = "https://source.unsplash.com/WLUHO9A_xik/300x300";

ReactDom.render(
  <img>
    <h1 contentEditable>Hello Everybody I'm {name}</h1>
    <img src={link1} alt="random" />
    <img src={link2} alt="random" />
    <img src={link3} alt="random" />
  </img>,
  document.getElementById("root")
);
