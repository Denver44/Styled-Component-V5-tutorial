import React from "react";

const Service = (props) => {
  return (
    <>
      <h1>Service Page</h1>
      <p>Welcome to About us Service</p>
      <h2>this is for props {props.name} </h2>
      <h2>this is for props {props.age} </h2>
    </>
  );
};

export default Service;
