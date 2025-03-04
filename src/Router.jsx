// src/router.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';

import UnderConstruction from './pages/UnderConstruction';
import HomePage from './pages/HomePage'


export default function Router () {
  return (
    <BrowserRouter>
      <Navbar />
      <SocialBar />

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/under-construction" element={<UnderConstruction/>} />
      </Routes>
    </BrowserRouter>    
  );
}


