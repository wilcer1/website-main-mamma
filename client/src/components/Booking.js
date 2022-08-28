import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import "../style/Booking.css"
import ReactCalendar from './Calendar';

function Booking(){
 

   


    return(
        
      <div className="Calendar">
        <ReactCalendar />
      </div>
    )
}



export default Booking