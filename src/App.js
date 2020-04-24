import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Mainnav from "./Components/Mainnav";
import Footer from "./Components/Footer";
import Index from "./Components/Index";

function App() {
  return (
    <div className="App text-center ">
      <BrowserRouter>
        <Mainnav />
        <Index />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
