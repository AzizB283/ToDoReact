import React, { useState } from "react";
import "./style.css";

function Count() {
  const [count, setCount] = useState(0);

  function btnClick() {
    setCount(count + 1);
  }

  return (
    <>
      <center>
        <button onClick={btnClick} className="btn">
          Click Here
        </button>
        <br /><br />
        <h2>{count}</h2>
      </center>
    </>
  );
}

export default Count;
