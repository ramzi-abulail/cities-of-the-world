import React, { useState } from 'react';
import './App.css';
import Navbar from './Nav';
import Footer123 from './Footer123';
import Hero from './Hero';
import About from './Aboutus';
import Contact from './Contact';
import Payment from './Payment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
 

      <Routes>
     
          <Route path='/' element={<Hero />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Payment' element={<Payment />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer123 />

    </BrowserRouter>
 
  
        
  
  
         
    );
}

export default App