import React, { useEffect, useState } from 'react';
import Calendar from "react-calendar"
import "../style/Calendar.css"



const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [times, setTimes] = useState([]);
  useEffect(() => {
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
      <table id='calendarandtime'>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <Calendar onChange={onChange} value={date} minDate={new Date()} />
            </td></tr>
            <tr className='timestr'>
            
         {times.map( time =>
         <td>
            <div className='times'>
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