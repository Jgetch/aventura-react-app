import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardRail from "./components/CardRail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardRail />
      <Footer/>
    </div>
  );
}

export default App;
