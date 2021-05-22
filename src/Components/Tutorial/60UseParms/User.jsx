import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const {fname,lname} = useParams();
  return (
    <>
      <h1>User Page</h1>
      <h1>Welcome {fname} {lname}</h1>
      <p>Welcome to User Page</p>
    </>
  );
};

export default User;
