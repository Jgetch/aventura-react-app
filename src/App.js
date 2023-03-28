import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        star="./assets/Star.png"
        rating={4.5}
        reviewCount={341}
        country="USA"
        title="How to keep motivated with Katie Zaferes"
        price={44}
      />
    </div>
  );
}

export default App;
