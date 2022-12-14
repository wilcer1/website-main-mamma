import React from "react";

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Booking from "./components/Booking";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
function App() {
  return (
    <>
    <Navbar/>
    <Router>
    
      <Routes>
      
      <Route exact path='/' element={< Home />}/>
      <Route exact path='/boka' element={< Booking />}/>
      <Route exact path='/admin' element={< Admin />}/>
      
      </Routes>
    </Router>
    </>
  )
}

export default App;