import React, { useState } from "react";



function Form2(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Hello");

        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLwClick = () => {
        let lwText = text.toLowerCase();
        setText(lwText);
    }

    const handleTcClick = () => {
        let tcText = text.split(' ').map(function(text) {
            return text.replace(text[0], text[0].toUpperCase());
              }).join(' ');
        setText(tcText);
    }

    const handleCClick = () => {

        navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    }
    
    const handleCtClick = () => {
        setText("");
    }
    
    const handleChange = (e) => {
        setText(e.target.value);
    }

  return (
    <>
    <div className="container my-4">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7" value={text} onChange={handleChange}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLwClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleTcClick}>Convert to Titlecase</button>
      <button className="btn btn-primary mx-3" onClick={handleCClick}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleCtClick}>Clear Text</button>
    </div>
    </>
  );
}

export default Form2;
