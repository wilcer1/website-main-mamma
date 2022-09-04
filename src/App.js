import React from "react";

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Booking from "./components/Booking";

import { HashRouter, Route } from "react-router-dom";
import Admin from "./components/Admin";
function App() {
  return (
    <>
    <Navbar/>
    <HashRouter >
      
      <Route exact path='/' element={< Home />}/>
      <Route exact path='/boka' element={< Booking />}/>
      <Route exact path='/admin' element={< Admin />}/>
      
      </HashRouter>
    </>
  )
}

export default App;