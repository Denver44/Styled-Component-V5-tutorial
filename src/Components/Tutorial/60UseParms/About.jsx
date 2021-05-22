import React from "react";

const About = (props) => {
  return (
    <>
      <h1>About Page</h1>
      <p>Welcome to About us Page</p>
      <h2>this is for props {props.name} </h2>
      <h2>this is for props {props.age} </h2>
    </>
  );
};

export default About;
