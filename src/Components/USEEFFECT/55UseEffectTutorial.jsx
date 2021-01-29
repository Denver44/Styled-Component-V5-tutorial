import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const change = () => {
    setnum(num + 1);
  };
  // This will every time called as the value of the nums is changed.
  useEffect(() => {
    alert("Useeffect called");
    console.log("hey durgesh i am inside use efect");
  }, [num]);

  return (
    <>
      <button onClick={change}>click me {num}</button>
    </>
  );
};
export default App;

// -------------- As it is Empty Array so it will be called for only one time.
// useEffect(() => {
//   alert("Useeffect called");
//   console.log("hey durgesh i am inside use efect");
// }, []);
