import React, { useState } from "react";
//1.It should Alawys inside  a function.
//2.Never used useState in a conditonally Statemnt like if else or terenary not in loops.
//3.Always at th top level of the fucntions.

// ------------ DEFINITON OF STATE ----------
//4.React components has a built-in state object.
// The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders

const App = () => {
  //5.Usestate alawys return a array of two value.
  //6.1st is alawsy current state.
  //7.2nd one is a function which help us to upadte the current state.
  const [a, setcount] = useState(100);
  //8. It will alawys re-render our compnent with new value.
  //  But this no good way to upadte the value as if we call more than setcount it will only act for one thats why we dont use this method. !IMPORTANT
  const increment = () => {
    setcount(a - 1);
    setcount(a - 1); // both only work for one time
  };

  return (
    <>
      <div className="center">
        <h1 className="heading">{a}</h1>{" "}
        <button onClick={increment}>Click Me</button>
      </div>
    </>
  );
};

export default App;

// ---------------------------------------------------------------- GOOD WAY TO UPADTE THE STATE. --------------------------------------

const App = () => {
  const [a, setcount] = useState(100);

  // This is Better way to chnage the state.
  // use this function version which is much better and reliable.
  const increment = () => {
    setcount((prev) => prev + 1); // Better way.
    setcount((prev) => prev + 1);
    setcount((prev) => prev + 1);
  };

  return (
    <>
      <div className="center">
        <h1 className="heading">{a}</h1>{" "}
        <button onClick={increment}>Click Me</button>
      </div>
    </>
  );
};

export default App;
// --------------------------------------------------------------- complex compution  ----------------------------------------//

const App = () => {
  // Use this when we have to do complex compution always pass iside a function as it only run for one time and dont make your process slow.
  const [a, setcount] = useState(() => {
    console.log("run"); // this going to run for only one time.
    return 4;
  });

  const increment = () => {
    setcount((prev) => prev + 1);
    setcount((prev) => prev + 1);
    setcount((prev) => prev + 1);
  };
  return (
    <>
      <div className="center">
        <h1 className="heading">{a}</h1>{" "}
        <button onClick={increment}>Click Me</button>
      </div>
    </>
  );
};

export default App;

// ---------------------------------------------------------- PASSING A OBJECT IN USESTATE.------------------------------------

const App = () => {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  // The below are Destructing it as we have to show the count the theme Below thats why we sued this.
  const count = state.count;
  const theme = state.theme;

  const increment = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 }; // we have to use spreadoperator to keep whatever it was as it and then set the Chnage.
    });
  };

  return (
    <>
      <div className="center">
        <span className="heading">{count}</span>{" "}
        <span className="heading">{theme}</span>{" "}
        <button onClick={increment}>Click Me</button>
      </div>
    </>
  );
};

// export default App;
