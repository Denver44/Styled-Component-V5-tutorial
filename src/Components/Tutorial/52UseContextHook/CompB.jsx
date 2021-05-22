import React, { useContext } from "react";
import CompC from "./CompC";
import { Fname, Lname } from "./App"; // must be in a comma as same as u export.

const CompB = () => {
  return <CompC></CompC>;
};

export default CompB;
