import React, { useEffect, useState } from "react";

const Search = () => {
  const [img, setimg] = useState();

  const inputevent = (e) => {
    setimg(e.target.value);
  };
  const imgs = `https://source.unsplash.com/400x300/?${img}`;
  return (
    <>
      <h1>Search Page</h1>
      <input
        type="text"
        onChange={inputevent}
        value={img}
        style={{ display: "block", margin: "25px" }}
      ></input>

      <img src={imgs} alt="random" width="400" height="300"></img>
    </>
  );
};

export default Search;
