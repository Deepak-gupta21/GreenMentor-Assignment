import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar"; // Ensure correct import path
import Displaybar from "./components/displaybar/Displaybar"; // Ensure correct import path




function App() {
  return (
    <div className="App">
      <Sidebar />
      
      <Displaybar /> 
     
    </div>

  );
}

export default App;

