// App.js
import React from "react";
import Navbar from "./NavigationBar/NavBar";
import CardContainer from "./CardContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <CardContainer />
    </div>
  );
}

export default App;
