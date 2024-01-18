// App.js
import React from "react";
import TabsComponent from "./TabsComponent";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";  

function App() {
  return (
    <Router>
      <div className="app">
        <TabsComponent />
      </div>
    </Router>
  );
}

export default App;
