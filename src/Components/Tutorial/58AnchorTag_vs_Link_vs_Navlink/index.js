import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// We have to put our all compoment under <BowserRouter> Always </BowserRouter>
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
