import { useState } from "react";
import About from "./components/About";
import CheckBox from "./components/Checkbox";
import Count from "./components/Count";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Header from "./components/Header";
import TextField from "./components/Textfield";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743 ";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Router>
        
        {/* <TextField /> */}
        {/* <CheckBox /> */}
        
        <Header title="Text Utils" mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />

          <Route path="/" element={<Form2 heading="Enter your text here" />} />

          <Route path="/count" element=<Count /> />

          <Route path="/form" element=<Form /> />

          <Route path="/textfield" element=<TextField /> />

          <Route path="/checkbox" element=<CheckBox /> />
        </Routes>

        {/* <Footer footerTitle = "This is footer title"/> */}
      </Router>
    </>
  );
}

export default App;
