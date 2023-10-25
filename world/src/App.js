import React, { useState } from 'react';
import './App.css';
import Navbar from './Nav';
import Footer123 from './Footer123';
import Hero from './Hero';


function App() {
  const [cities, setCities] = useState([]);
  return (


   
      <div className="App">
        <Navbar/>
        <Hero/>
  
        
  
  
        <Footer123/>
        
      </div>
  
    );
  }

export default App