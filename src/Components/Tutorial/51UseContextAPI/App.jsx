import React, { createContext } from "react";
import CompA from "./CompA";

const Fname = createContext();
const Lname = createContext(); // we hvw to use createContext.

// we need a Provider which can provide our value to other components.
const App = () => {
  return (
    <>
      <Fname.Provider value={"Durgesh"}>
        <Lname.Provider value={"rai"}>
          <CompA />
        </Lname.Provider>
      </Fname.Provider>
    </>
  );
};

export default App; // As we Know there is only one default .
export { Fname, Lname }; // for other function we have to amke objects like this sepated wit comma

// So React hooks Provides a Concept call Context.
// react Context API allows you to easily access data at different levels of the compment tree, wihtout passing props to every level.

// Like if we want to send data from parent to child component c we can sedn it easily.
