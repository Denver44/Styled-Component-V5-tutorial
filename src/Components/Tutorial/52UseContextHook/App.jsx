import React, { createContext } from "react";
import CompA from "./CompA";

const Fname = createContext();
const Lname = createContext();

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

export default App;
export { Fname, Lname }; 
