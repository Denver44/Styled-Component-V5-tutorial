import React, { useState, useMemo, useEffect } from "react";

// Note : When We Change a State of Component in react actually it re-render the entire whole Components. thats why the slow function will be called Everytime.

function Memo() {
  const [number, setNumber] = useState(1);
  const [dark, setdark] = useState(false);

  // ------------Normal  without Memoizing------------------
  // const doubleNumber = solwFunction(number);
  // const themeStyles = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  //   width: "200px",
  // };

  //---------------Memoized Function-----------------
  // Pass the function inside it and then list of dependecies
  const doubleNumber = useMemo(() => solwFunction(number), [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      width: "200px",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme Change");
    // Now it will not dipslay if we change our input because we have memozied or our dark state . So when ever our dark variable is changed then only the app will re render.
  }, [themeStyles]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setdark((prevDark) => !prevDark)}>
        change Theme
      </button>
      <div style={themeStyles}> {doubleNumber}</div>
    </div>
  );
}

export default Memo;

function solwFunction(num) {
  console.log("i am Slow");
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
}

// As we Use UseMemo it uses our Memory because it store or previous data in it.
// So dont use every where where especially it not needed.
