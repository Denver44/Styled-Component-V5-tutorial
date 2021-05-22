import React from "react";

const slotM = (props) => {
  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <h1>
          Its Matching {x} {y} {z}
        </h1>
      </>
    );
  } else {
    return (
      <>
        <h1>
          Not Matching {x} {y} {z}
        </h1>
      </>
    );
  }
};

export default slotM;
