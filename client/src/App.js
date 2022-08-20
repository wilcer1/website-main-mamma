import React from "react";

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Booking from "./components/Booking";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <div className="App">

      </div>
      <Routes>
      <Route exact path='/' element={< Home />}/>
      <Route exact path='/boka' element={< Booking />}/>
      
      </Routes>
    </Router>
    </>
  )
}

export default App;