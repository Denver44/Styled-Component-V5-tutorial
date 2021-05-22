import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  const Inc = () => {
    setnum(num + 1);
  };
  const Dec = () => {
    if (num == 0) {
      alert("U cannot go negative")
      return setnum(0);
    } else {
      setnum(num - 1);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>

          <button className="first" onClick={Inc}>
            INC
          </button>
          <button className="two" onClick={Dec}>
            DEC
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
