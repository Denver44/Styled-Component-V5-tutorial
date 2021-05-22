import React, { useContext } from "react";
import { Fname, Lname } from "./App"; // must be in a comma as same as u export.

const CompC = () => {
  // So simple to use Usecontext
  // we have to declare it on top.
  const fname = useContext();
  const lname = useContext();
  return (
    <>
      return (
      <h1>
        I am in Component C {Fname} {Lname}
      </h1>
    </>
  );
};

export default CompC;
