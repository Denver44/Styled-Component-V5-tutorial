import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const History = useHistory();

  // for pathname is good to use Loaction rather than history.
  return (
    <>
      <h1>User Page</h1>
      <h1>
        Welcome {fname} {lname}
      </h1>
      <p>Welcome to User Page</p>
      <p>location is {location.pathname}</p>
      {location.pathname === "/user/durgesh/rai" ? (
        <button onClick={() => alert("You are Awesome ")}>Clicke me</button>
      ) : (
        <button onClick={() => History.goBack()}>BaCk button </button>
      )}
    </>
  );
};

export default User;
