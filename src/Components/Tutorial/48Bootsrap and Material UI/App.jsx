import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [num, setnum] = useState(0);

  const Inc = () => {
    setnum(num + 1);
  };
  const Dec = () => {
    if (num == 0) {
      
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

          <Button className="first" onClick={Inc}>
            <AddIcon />
          </Button>
          <button className="btn btn-success">Hello</button>
          <Button className='two' onClick={Dec}>
            <RemoveIcon />
          </Button>
          
        </div>
      </div>
    </>
  );
};

export default App;
