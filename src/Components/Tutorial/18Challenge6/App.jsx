import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [newtime, update] = useState(time);
  const updation = () => {
    time = new Date().toLocaleTimeString();
    update(time);
  };
  return (
    <>
      <div className="center">
        <h2 className="heading">{newtime}</h2>{" "}
        <button onClick={updation}>Click Me</button>
      </div>
    </>
  );
};

export default App;
