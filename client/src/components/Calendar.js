import React, { useEffect, useState } from 'react';
import Calendar from "react-calendar"
import "../style/Calendar.css"
import {Button} from "@material-ui/core"




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
  const [availabilityState, setAvailabilityState] = useState(
    getAvailability()
  );
  
  useEffect(() => {
   
    fetch(`/api/availableForDate?date=${formatDate(date)}`)
      .then(res => res.json())
      .then(response => {
        response.map((element) => {
          element.available = true
        })
        setTimes(response);

      });


  }, [date])

  function getAvailability(){
    if(times.length > 0){
      times.map((element) => {
        return element.available
      })

    }else{
      return []
    }
  }

  function TimeButton({className, time, handleClick, available}){

    return (
      <Button
        onClick={handleClick}
        style={{
          backgroundColor: available ? "black" : "red"
        }}
        className={className}
        variant={"contained"}
      >
        {time}
      </Button>
    );
  
  }

  const toggleButton = i => {
    
      times[i].available = !times[i].available;
      setAvailabilityState()

    

    
  }

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
         times.map( (time, i) =>
         <td>
          {console.log(time.available)}
            <TimeButton 
            key={i}
            className="Timebutton"
            handleClick={function(){toggleButton(i)}}
            available={time.available}
            time={time.time}

            />
          </td>)}
          
          </tr>
          {console.log(times)}
        </tbody>
      </table>

    </div>


  );

}

export default ReactCalendar;