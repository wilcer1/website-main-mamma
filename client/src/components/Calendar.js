import React, { useState } from 'react';
import Calendar from "react-calendar"
import "../style/Calendar.css"



const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState([]);
  

  const onChange = date => {
    console.log("hiyaaaa");
    setDate(date)
  }
   
    return (
      <div className='container'>
        <Calendar onChange={onChange} value={date} minDate={new Date()}/>
        {console.log(date)}
      </div>
    );

}

export default ReactCalendar;