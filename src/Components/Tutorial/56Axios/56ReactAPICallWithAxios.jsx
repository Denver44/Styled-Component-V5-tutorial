import React, { useEffect, useState } from "react";
import axios from "axios";

// We hav installed axios

const CompA = () => {
  const [num, setnum] = useState();
  const [name, setname] = useState();
  const [move, setmove] = useState();

  const changenum = (e) => {
    setnum(e.target.value);
  };

  // Use effect if u want to show things after render.
  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setname(res.data.name);
      setmove(res.data.moves.length);
    }
    getdata();
  });
  return (
    <>
      <h1> You choose {num} option</h1>
      <h1> My name is {name} </h1>
      <h1> I have {move} moves </h1>
      <select value={num} onChange={changenum}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default CompA;

// We have to use onchnage to change the value.
