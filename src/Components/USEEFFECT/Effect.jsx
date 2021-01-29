import React, { useEffect, useState } from "react";

const Effect = () => {
  const [num, setnum] = useState(5);
  const change = () => {
    setnum((prevnum) => prevnum + 1);
  };

  // 1. As it is Empty Array so it will run for only one time.
  useEffect(() => {
    console.log("render");
  }, []);

  return <button onClick={change}>click me {num}</button>;
};
export default Effect;
