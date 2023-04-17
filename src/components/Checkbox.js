import React, { useState } from "react";

function CheckBox() {
  const [liked, setLiked] = useState(true);
  function handleLiked(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <h1>Checkbox</h1>

      <label htmlFor="">
        <input type="checkbox" onChange={handleLiked} checked={liked}/>
        Click here to check this box 
      </label>

      <p>You {liked ? "liked" : "did not liked"} this.</p>
    </>
  );
}

export default CheckBox;
