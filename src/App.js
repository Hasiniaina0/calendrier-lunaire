import "./App.css";
import React from "react";
import HomePage from "./page/HomePage";
import fondImage from "./asset/fond.jpg";

function App() {
  return (
    <div
      className="App min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${fondImage})` }}
    >
      <HomePage />
    </div>
  );
}

export default App;
