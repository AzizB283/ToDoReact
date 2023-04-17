import React, { useState } from "react";

function Form() {
    const [yourname, setYourName] = useState('User')
    const [age, setAge] = useState(0)

    function nameChange(e){
        setYourName(e.target.value)
    }

    function ageIncr(){
        setAge(age+1)

    }

  return <>

  
    <div className="container"> 
    <h1>Form Data</h1>

    <input type="text" name="" id="" onChange={nameChange}/><br /><br />

    <button onClick={ageIncr}>Increment Age</button>

    <p>Hello, {yourname}. Your age is {age}.</p>
    </div>
  </>;
}

export default Form;
