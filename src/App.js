import './App.css';
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx"
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
