import React, { useState } from "react";
import useGif from "../useGif.js";

function Tag() {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);
  console.log("hello",gif);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} width="400" height="300" alt="random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Next</button>
    </div>
  );
}

export default Tag;
