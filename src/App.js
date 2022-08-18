import './App.css';
import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Axios from "axios";
import Footer from "./components/Footer";
import Home from './components/Home';
import Rent from './components/Rent';


function App() {

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/rent" element={<div>
          <Rent />
        </div>} />
        <Route path="/" element={<div>
          <Home />
        </div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;