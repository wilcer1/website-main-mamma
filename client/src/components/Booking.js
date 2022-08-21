import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Calendar from './Calendar';

function Booking(){
    const [date, setDate] = useState(null);

    useEffect(() => {
      

    }, [])


    return(
        
      <div>
        <Calendar />
      </div>
    )
}



export default Booking