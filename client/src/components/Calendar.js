import React, { useEffect, useState } from 'react';
import Calendar from "react-calendar"
import "../style/Calendar.css"

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [times, setTimes] = useState([]);
  
  useEffect(() => {
   
    fetch(`/api/availableForDate?date=${formatDate(date)}`)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setTimes(response);

      });


  }, [])



  const onChange = date => {

    setDate(date)
  }

  return (
    <div className='container'>
      <table id='calendarandtime'>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <Calendar onChange={onChange} value={date} minDate={new Date()} locale="sv" />
            </td></tr>
            <tr className='timestr'>
            {console.log(formatDate(date))}
         {
         times.map( time =>
         <td>
            <div >
            <button id={time.date} >{time.time}</button>
          </div></td>)}
          
          </tr>
          {console.log(times)}
        </tbody>
      </table>

    </div>


  );

}

export default ReactCalendar;