import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  IconButton,
  Grid,
  makeStyles,
  Card,
  Button,
  CircularProgress,
  Popover,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import Popup from 'reactjs-popup';
import '../style/Calendar.css'
import { AiFillPlusCircle, AiFillDelete } from "react-icons/ai";






const AdminCalendarTemplate = ({
  primaryColor = "#DF1B1B",
  secondaryColor = "#47b2a2",
  fontFamily = "Roboto",
  fontSize = 12,
  primaryFontColor = "#222222",

}) => {
  const theme = createTheme({
    typography: {
      fontFamily: `${fontFamily}`,
      fontSize: fontSize,
    },
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      text: {
        primary: primaryFontColor,
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    calendar: {
      fontFamily: theme.typography.fontFamily,
    },
    calendarText: {
      margin: 0,
      width: 25,
      height: 25,
      textAlign: "center",
    },
    button: {
      minWidth: 200,
      margin: 10,
      fontFamily: theme.typography.fontFamily,
    },
    buttonNoMargin: {
      minWidth: 200,
      fontFamily: theme.typography.fontFamily,
    },
    popover: {
      pointerEvents: "none",
      fontFamily: theme.typography.fontFamily,
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));

  const useMonths = (year) => ({
    1: {
      lastDay: 31,
      month: "January",
      firstDay: moment(`01/01/${year}`),
    },
    2: {
      lastDay: year % 4 === 0 ? 29 : 28,
      month: "February",
      firstDay: moment(`02/01/${year}`),
    },
    3: {
      lastDay: 31,
      month: "March",
      firstDay: moment(`03/01/${year}`),
    },
    4: {
      lastDay: 30,
      month: "April",
      firstDay: moment(`04/01/${year}`),
    },
    5: {
      lastDay: 31,
      month: "May",
      firstDay: moment(`05/01/${year}`),
    },
    6: {
      lastDay: 30,
      month: "June",
      firstDay: moment(`06/01/${year}`),
    },
    7: {
      lastDay: 31,
      month: "July",
      firstDay: moment(`07/01/${year}`),
    },
    8: {
      lastDay: 31,
      month: "August",
      firstDay: moment(`08/01/${year}`),
    },
    9: {
      lastDay: 30,
      month: "September",
      firstDay: moment(`09/01/${year}`),
    },
    10: {
      lastDay: 31,
      month: "October",
      firstDay: moment(`10/01/${year}`),
    },
    11: {
      lastDay: 30,
      month: "November",
      firstDay: moment(`11/01/${year}`),
    },
    12: {
      lastDay: 31,
      month: "December",
      firstDay: moment(`12/01/${year}`),
    },
  });


  const monthsSV =  (month) => {
    switch(month){
      case "January":
        return "Januari";

      case "February":
        return "Februari";

      case "March":
        return "Mars";

      case "April":
        return "April";

      case "May":
        return "Maj";

      case "June":
        return "Juni";

      case "July":
        return "Juli";
  
      case "August":
        return "Augusti";
  
      case "September":
        return "September";
        
      case "October":
        return "Oktober";

      case "November":
         return "November";
  
      case "December":
        return "December";

      default:
        return month;
    }
    


  }
  

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



  function TimeButton({ className, time, available, handleClick }) {
    return (
      <Button
        onClick={handleClick}
        color={available ? "primary" : "default"}
        className={className}
        variant={available ? "contained" : "outlined"}
      >
        {time.time}
      </Button>
    );
  }

  function Popupfunc({ classname, open, close, activeDay, timeSelected }) {
    if (true) {
      return (
        <Popup
          className={classname}
          open={open} closeOnDocumentClick onClose={close}>
          <div className="popUp">
            <button className="close" onClick={close}>&times;
            </button>
            <div className="header"> Tid Raderad:</div>
            <div className="content">{activeDay} <br></br>{timeSelected}</div>
          </div>
        </Popup>


      )
    } else {
      return (<h1>Hey</h1>)
    }

  }

  function getDaysArray() {
    return [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ];
  }









  return function Calendar() {
    const classes = useStyles();
    const today = moment();

    const [activeDay, setActiveDay] = useState(formatDate(today._d));
    const [year, setYear] = useState(Number(today.format("YYYY")));
    const [monthNumber, setMonthNumber] = useState(Number(today.format("M")));
    const months = useMonths(year);
    const { firstDay, month, lastDay } = months[monthNumber];
    let dayOfWeek = Number(moment(firstDay).format("d"));
    const days = getDaysArray();
    const [times, setTimes] = useState([]);
    const [saving, setSaving] = useState(false);
    const [timeSelected, setTimeSelected] = useState(null);
    const [openPop, setOpenPop] = useState(false);
    const closeModal = () => setOpenPop(false);
    const optionsdleft = [
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
    ];
    const optionsdright = [
      "06:00",
      "07:00",
      "08:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00"
    ];
    const defaultOptionLeft = optionsdleft[0];
    const defaultOptionRight = optionsdright[0];
    let week = 0;
    let dayOfMonth = 1;
    while (week < 6 && dayOfMonth <= lastDay) {
      days[week][dayOfWeek] = dayOfMonth;
      dayOfMonth++;
      dayOfWeek++;
      if (dayOfWeek === 7) {
        week++;
        dayOfWeek = 0;
      }
    }
    
    
    useEffect(() => {

      fetch(`https://localhost:5000/api/availableForDate?date=${activeDay}`)
        .then(res => res.json())
        .then(response => {

          setTimes(response);

        });


    }, [activeDay])

    const createArrowHandler = (delta) => () => {
      let newMonth = monthNumber + delta;
      if (newMonth > 12) {
        setYear(year + 1);
        newMonth = 1;
      } else if (newMonth < 1) {
        setYear(year - 1);
        newMonth = 12;
      }
      setActiveDay(null);
      setTimes([]);
      setTimeSelected(null)
      setMonthNumber(newMonth);
    };

    function saveBooking(datetime) {

      fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({ datetime: datetime })
      })
        .then(res => res.text())
        .then(response => {
          console.log(response);
        })


    }


    const handleJumpToCurrent = () => {
      setYear(Number(today.format("YYYY")));
      setMonthNumber(Number(today.format("M")));
      setActiveDay(null);
      setTimes([]);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverContent, setPopoverContent] = useState(null);

    const handleClosePopover = () => {
      setAnchorEl(null);
      setPopoverContent(null);
    };


    function timeButtonClicked(i) {
      if (timeSelected == null) {
        times[i].available = !times[i].available;
        setTimeSelected(times[i].time);

      } else if (times[i].available) {
        times[i].available = !times[i].available;
        setTimeSelected(null);

      }
      else {
        times.map((element, z) => {
          times[z].available = false;
        })
        times[i].available = true
        setTimeSelected(times[i].time);
      }
    }

    const monthsLong = {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12',
    };
    return (
      <ThemeProvider theme={theme}>
        <Grid
          className={classes.calendar}
          container
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Grid container direction="row" alignItems="center" justify="center">
              <Grid item>
                <IconButton
                  disabled={
                    year === Number(today.format("YYYY")) &&
                    month === today.format("MMMM")
                  }
                  onClick={createArrowHandler(-1)}
                >
                  <ArrowLeft />
                </IconButton>
              </Grid>
              <Grid item>
                <Card style={{ padding: 10, margin: 10 }} variant="outlined">
                  <Grid container direction="column" alignItems="center">
                    <h3>
                      {monthsSV(month)} {year}
                    </h3>
                    {days.map((week, i) => (
                      <Grid key={i} item>
                        <Grid container direction="row">
                          {week.map((day, i) => (
                            <Grid key={year + month + i} item>
                              <IconButton
                                onClick={() => {
                                   setActiveDay("0" + day + "/" + monthsLong[month] + "/" + year) 
                                   setTimeSelected(null) 
                                  
                                  }}
                                color={
                                  activeDay === "0" + day + "/" + monthsLong[month] + "/" + year
                                    ? "primary"
                                    : "secondary"

                                }
                                disabled={
                                  !day ||
                                  (year === Number(today.format("YYYY")) &&
                                    month === today.format("MMMM") &&
                                    day < Number(today.format("D")))
                                }
                                size="medium"

                                onMouseLeave={handleClosePopover}
                              >
                                <p className={classes.calendarText}>{day}</p>
                              </IconButton>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    ))}
                    <Popover
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      className={classes.popover}
                      classes={{ paper: classes.paper }}
                      anchorEl={anchorEl}
                      open={!!anchorEl}
                    >
                      {popoverContent}
                    </Popover>
                    <Button
                      disabled={
                        year === Number(today.format("YYYY")) &&
                        month === today.format("MMMM")
                      }
                      onClick={handleJumpToCurrent}
                      className={classes.buttonNoMargin}
                    >
                      Hoppa till nuvarande månad
                    </Button>
                  </Grid>
                </Card>
              </Grid>
              <Grid item>
                <IconButton onClick={createArrowHandler(1)}>
                  <ArrowRight />
                </IconButton>
              </Grid>

              <Grid item>
                <h1>Existerande tider</h1>

                <Grid container justify="center" alignItems="center" wrap="wrap">
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      wrap="wrap"
                    >
                      {times.map(
                        (time, i) =>
                          i < Math.ceil(times.length / 2) && (
                            <TimeButton
                              key={time.time.concat(time.date)}
                              className={classes.button}
                              time={time}
                              handleClick={() => { timeButtonClicked(i) }}
                              available={time.available}
                            />
                          )
                      )}

                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      wrap="wrap"
                    >
                      {times.map(
                        (time, i) =>
                          i < times.length &&
                          i > Math.ceil(times.length / 2) - 1 && (

                            <TimeButton
                              key={time.time.concat(time.date)}
                              className={classes.button}
                              time={time}
                              handleClick={() => { timeButtonClicked(i) }}
                              available={time.available}
                            />

                          )

                      )}

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center" justify="center">
              <Grid item>
                <Button 
                  startIcon={<AiFillDelete></AiFillDelete>}
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setOpenPop(true)
                    // saveBooking(`${activeDay}_${timeSelected}`);

                  }}
                  disabled={timeSelected === null}
                  className={classes.button}
                >
                  Ta bort tid
                </Button>

                <Popupfunc
                  classname="popUp"
                  open={openPop}
                  close={closeModal}
                  activeDay={activeDay}
                  timeSelected={timeSelected}
                />

                <Popup trigger={  
                  <Button
                  startIcon={<AiFillPlusCircle></AiFillPlusCircle>}
                  color="primary"
                  variant="contained"
                  onClick={() => {

                    // saveBooking(`${activeDay}_${timeSelected}`);

                  }}
                  disabled = {activeDay === null}
                  className={classes.button}
                >
                  Lägg till tid 
                </Button>}
                  modal nested  >
                  {close => (
                    <div className="popUp">
                      <button className="close" onClick={close}>&times;
                      </button>
                      <div className="header"> Modal Title </div>
                      <div className="content">
                      Dag vald: {activeDay}
                    
              
                      </div>
                      <div className="actions">
                        <button>Lägg till tid</button>
                        <button className="button" onClick={() => { console.log('modal closed '); close(); }}
                        >Stäng</button>
                      </div>
                    </div>)}
                </Popup>
              





              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    );






  };
};



export default AdminCalendarTemplate;