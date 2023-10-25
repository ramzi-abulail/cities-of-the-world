import React, { useState } from 'react';
import './App.css';
import Navbar from './Nav';
import Footer123 from './Footer123';
import Hero from './Hero';
import List from './List';
import Cities from'./cities';


function App() {
  const [cities, setCities] = useState([]);
  return (


   
      <div className="App">
        <Navbar/>
        <Hero 
          specifyCities = {setCities}
        />
  
        {console.log(cities)}
  
        <List
        cities = {Cities}
        />
  
        <Footer123/>
        
      </div>
  
    );
  }

export default App