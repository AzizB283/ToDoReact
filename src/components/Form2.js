import React, { useState } from "react";



function Form2(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
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

    const handleRvClick = () => {
        let rvText = text.split('').reverse().join('');
        setText(rvText);
    }

    const handleRwClick = () => {

        let repval=prompt("Enter the word to be replaced:")
        let tobereplaced= new RegExp(repval,'g');

        let toreplace=prompt("Enter the text that you want to replace with:");

        let rwText = text.replace(tobereplaced,toreplace);
        setText(rwText);
    }

    const handleResClick = () => {
        let resText = text.replace(/\s+/g,' ').trim();
        setText(resText);
    }

    const handleCClick = () => {
        let textarea = document.getElementById("textarea");
        textarea.select();
        // textarea.setSelectionRange(0,9999);
        navigator.clipboard.writeText(textarea.value);
        alert("Copied the text: " + textarea.value);
    }
    
    const handleCtClick = () => {
        setText("");
    }

    const handleSpClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    
    const handleChange = (e) => {
        setText(e.target.value);
    }

  return (
    <>
    <div className="container my-4">
      <div className="mb-3">
        <h1>{props.heading}</h1>
          
        <textarea
          className="form-control"
          id="textarea"
          rows="7" value={text} onChange={handleChange}
        ></textarea>
      </div>

      <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLwClick}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTcClick}>Convert to Titlecase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRvClick}>Reverse Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRwClick}>Replace Word</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleResClick}>Remove Extra Space</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCClick}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCtClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSpClick}>Speak</button>
    </div>


    <div className="container my-4">
        <h2>Your Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words, {text.length} Characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>

        <h3 className="my-4">Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}

export default Form2;
