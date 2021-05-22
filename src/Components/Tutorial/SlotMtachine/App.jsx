import React from "react";
import SlotM from "./SlotM";
import "./index.css";

const App = () => {
  return (
    <>
      <h1 className="heading_style"> 🎰 Welcome to Slot machine Game 🎰</h1>
      <SlotM x="😄" y="😄" z="😄"></SlotM>
      <SlotM x="🥇" y="🥇" z="🥇"></SlotM>
      <SlotM x="🚴‍♂️" y="🚴‍♂️" z="🔺"></SlotM>
      <SlotM x="🅰️" y="🅰️" z="🅰️"></SlotM>
    </>
  );
};

export default App;
