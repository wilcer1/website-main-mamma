import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Booking from "./components/Booking";
import Admin from "./components/Admin";
import VerifyBooking from "./components/VerifyBooking";
function App() {
  return (
    <>
    <Navbar/>
    <Router>
    
      <Routes>
      
      <Route exact path='/' element={< Home />}/>
      <Route exact path='/boka' element={< Booking />}/>
      <Route exact path='/admin' element={< Admin />}/>
      <Route exact path='/verifyBooking' element={< VerifyBooking />}/>
      
      </Routes>
    </Router>
    </>
  )
}

export default App;