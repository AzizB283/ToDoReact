import React from "react";

function TextField() {
    const [text, setText] = React.useState(' ');

    function handleChange(e){
        setText(e.target.value);
    }

  return (
   <>
    <h1>TextField</h1>

    <label htmlFor="">Type here something in textfield: </label><br />
    <input type='text' placeholder='Type here...' value={text} onChange={handleChange} />

    <p>You typed: {text}</p>

   </>
  )
}

export default TextField