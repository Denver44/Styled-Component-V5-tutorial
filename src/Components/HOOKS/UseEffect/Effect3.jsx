import React, { useEffect, useState } from "react";

const Effect2 = () => {
  const [width, setwidth] = useState(window.innerWidth);

  const handlereszie = () => {
    setwidth(window.innerWidth);
  };

  // We should remove the listener

  useEffect(() => {
    window.addEventListener("resize", handlereszie);
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  return <p>{width}</p>;
};
export default Effect2;
