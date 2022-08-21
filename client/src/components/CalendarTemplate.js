import React, { useState } from "react";
import moment from "moment";
import {
  IconButton,
  Grid,
  makeStyles,
  Card,
  Button,
  CircularProgress,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import Box from "@material-ui/core/Box"
const CalendarTemplate = ({
  availability,
  setAvailability,
  primaryColor = "#DF1B1B",
  secondaryColor = "#47b2a2",
  fontFamily = "Roboto",
  fontSize = 12,
  primaryFontColor = "#222222",
  startTime = "8:00",
  endTime = "20:00",
}) => {
  const theme = createMuiTheme({
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


  const getDefaultTimes = () => {
    const times = [
      {
        time: "0:00",
        available: false,
      },
      {
        time: "1:00",
        available: false,
      },
      {
        time: "2:00",
        available: false,
      },
      {
        time: "3:00",
        available: false,
      },
      {
        time: "4:00",
        available: false,
      },
      {
        time: "5:00",
        available: false,
      },
      {
        time: "6:00",
        available: false,
      },
      {
        time: "7:00",
        available: false,
      },
      {
        time: "8:00",
        available: false,
      },
      {
        time: "9:00",
        available: false,
      },
      {
        time: "10:00",
        available: false,
      },
      {
        time: "11:00",
        available: false,
      },
      {
        time: "12:00",
        available: false,
      },
      {
        time: "13:00",
        available: false,
      },
      {
        time: "14:00",
        available: false,
      },
      {
        time: "15:00",
        available: false,
      },
      {
        time: "16:00",
        available: false,
      },
      {
        time: "17:00",
        available: false,
      },
      {
        time: "18:00",
        available: false,
      },
      {
        time: "19:00",
        available: false,
      },
      {
        time: "20:00",
        available: false,
      },
      {
        time: "21:00",
        available: false,
      },
      {
        time: "22:00",
        available: false,
      },
      {
        time: "23:00",
        available: false,
      },
      {
        time: "0:00",
        available: false,
      },
    ];
    let include = false;
    return times.filter(time => {
      if (time.time === startTime) {
        include = true;
      }
      if (time.time === endTime) {
        include = false;
        return true;
      }
      return include;
    })
  };

  function TimeButton({ className, start, end, available, handleClick }) {
    return (
      <Button
        onClick={console.log("time")}
        color={available ? "primary" : "default"}
        className={className}
        variant={available ? "contained" : "outlined"}
      >
        {start} - {end}
      </Button>
    );
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
    const [year, setYear] = useState(Number(today.format("YYYY")));
    const [monthNumber, setMonthNumber] = useState(Number(today.format("M")));
    const months = useMonths(year);
    const [activeDay, setActiveDay] = useState(null);
    const { firstDay, month, lastDay } = months[monthNumber];
    let dayOfWeek = Number(moment(firstDay).format("d"));
    const days = getDaysArray();;
    const [saving, setSaving] = useState(false);
    const [times, setTimes] = useState(getDefaultTimes);
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
    const createArrowHandler = (delta) => () => {
        let newMonth = monthNumber + delta;
        if (newMonth > 12) {
          setYear(year + 1);
          newMonth = 1;
        } else if (newMonth < 1) {
          setYear(year - 1);
          newMonth = 12;
        }
        setMonthNumber(newMonth);
    }

    const handleJumpToCurrent = () => {
        setYear(Number(today.format("YYYY")));
        setMonthNumber(Number(today.format("M")));
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
                      {month} {year}
                    </h3>
                    {days.map((week, i) => (
                      <Grid key={i} item>
                        <Grid container direction="row">
                          {week.map((day, i) => (
                            <Grid key={year + month + i} item>
                              <IconButton
                                
                                onClick={() => {setActiveDay(day);
                                }}
                                color={
                                    activeDay === day
                                    ? "primary"
                                    :  !day ||
                                    (year === Number(today.format("YYYY")) &&
                                      month === today.format("MMMM") &&
                                      day < Number(today.format("D")))
                                      ? "secondary"
                                      : "default"
                                }

                                disabled={
                                  !day ||
                                  (year === Number(today.format("YYYY")) &&
                                    month === today.format("MMMM") &&
                                    day < Number(today.format("D")))
                                }
                                size="medium"
                               
                              >
                                <p className={classes.calendarText}>{day}</p>
                              </IconButton>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    ))}
                    <Button
                      disabled={
                        year === Number(today.format("YYYY")) &&
                        month === today.format("MMMM")
                      }
                      onClick={handleJumpToCurrent}
                      className={classes.buttonNoMargin}
                    >
                      Jump to Current Month
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
                
                <Grid container justify="center" alignItems="center" wrap="wrap">
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      wrap="wrap"
                      
                    >
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
                          i < times.length - 7 && (
                            <TimeButton
                              key={time.time}
                              className={classes.button}
                              start={time.time}
                              end={times[i + 1].time}
                              handleClick={console.log("hi")}
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
                {saving ? (
                  <CircularProgress />
                ) : (
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={console.log("hi")}
                    className={classes.button}
                  >
                    Spara
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    );

   

    

   
  };
};

export default CalendarTemplate;