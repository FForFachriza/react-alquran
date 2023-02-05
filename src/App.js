import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Surah from './Pages/Surah';
import About from './Pages/About';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surah/:id" element={<Surah />} />
      <Route path="/about" element={<About />} />
    </Routes>
   </BrowserRouter>
  );
}
export default App;