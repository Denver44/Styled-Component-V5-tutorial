import React, { useEffect, useState } from "react";

const Effect1 = () => {
  const [num, setnum] = useState(5);
  const change = () => {
    setnum((prevnum) => prevnum + 1);
  };

  // This will every time called as the value of the nums is changed.
  useEffect(() => {
    console.log("render");
  }, [num]);

  return <button onClick={change}>click me {num}</button>;
};
export default Effect1;
