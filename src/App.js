import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardElements from "./components/CardElements";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardElements />
    </div>
  );
}

export default App;
