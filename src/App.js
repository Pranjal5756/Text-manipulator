// import logo from './logo.svg';
// import "./App.css";
import Navbar from "./Component/Navbar";
import Content from "./Component/Content1";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3275a8";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="Text-M" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Content heading="Enter Text" mode={mode} />
      </div>
    </>
  );
}

export default App;
