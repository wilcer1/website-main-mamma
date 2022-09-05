import React from "react";

import Home from "./Home"
import Navbar from "./Navbar"
import Booking from "./Booking";

import {Routes, Route } from "react-router-dom";
import Admin from "./Admin";

export default function App() {
  return (
  
    <>
    <Navbar/>
    <Routes>
      
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/boka' element={<Booking/>}/>
      <Route exact path='/admin' element={<Admin/>}/>
      
      </Routes>
    </>
  )
}

