import { useState } from "react";
import About from "./components/About";
import CheckBox from "./components/Checkbox";
import Count from "./components/Count";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Header from "./components/Header";
import TextField from "./components/Textfield";



function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743 "
      document.body.style.color = "white"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
  
    }
  }
  return (
  
  <>
    {/* <Count /> */}
    {/* <TextField /> */}
    {/* <CheckBox /> */}
    {/* <Form /> */}
    <Header title = "To Do Lists"  mode={mode} toggleMode = {toggleMode}/>
    <Form2 heading = "Enter your text here"/>
    {/* <Footer footerTitle = "This is footer title"/> */}
    {/* <About /> */}
  </>
  );
}

export default App;
