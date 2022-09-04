import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Calendar from './Calendar';
import "../style/Booking.css"

function Booking(){
    const [date, setDate] = useState(null);

    useEffect(() => {
      

    }, [])


    return(
        
      <div className="CalendarContainer">
        <Calendar/>
      </div>
    )
}



export default Booking