import React from "react";
import TabsComponent from "./TabsComponent";
import ParkName from "./Parkname";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";  

function App() {
  return (
    <Router>
      <div className="app">
        <TabsComponent />
        <ParkName />
      </div>
    </Router>
  );
}

export default App;
