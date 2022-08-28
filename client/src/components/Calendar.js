import React, { useEffect, useState } from 'react';
import Calendar from "react-calendar"
import "../style/Calendar.css"



const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState(null);
  useEffect(()=> {
    const timesformatted = []
    fetch("/api/getAvailable")
    .then(res => res.json())
    .then(response => {
      response.map((element) => {
        var available = element.datetime.split("_");
        timesformatted.push({
          date: available[0],
          time: available[1]
        });
  
      });
      setTimes(timesformatted);
      
    });

      
  }, [])

  

  const onChange = date => {
    
    setDate(date)
  }
   
    return (
      <div className='container'>
        <div>
        <Calendar onChange={onChange} value={date} minDate={new Date()}/>
        {console.log(times)}
        </div>
        <div className='times'>
          <h1>HEY</h1>
        </div>
      </div>
      
      
    );

}

export default ReactCalendar;