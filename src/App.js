import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Mainnav from "./Components/Mainnav";
import Index from "./Components/Index";

function App() {
  return (
    <div className="App text-center ">
      <BrowserRouter>
        <Mainnav />
        <Index />

      </BrowserRouter>
    </div>
  );
}

export default App;
