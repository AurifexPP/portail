import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import EventCard from '../content/EventCard';

import { getWeekNumber } from '../../utils/date.util'

const useStyles = makeStyles({
  card: {
    margin: "1rem"
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    tableLayout: "fixed"
  },
  td: {
    border: "1px solid #333",
    height: "6rem;",
    verticalAlign: "baseline",
    padding: "0 0.5rem",
    fontSize: 24,
  },
  th: {
    border: "1px solid #333",
    padding: "0 0.5rem",
    fontSize: 24,
  },
  colFirst: {
    width: 40
  }
})

const events = [
  {
    title: "Réunion Equipage Calembourt",
    date: new Date(),
    hour: "19h30",
    location: "Discord - Salon Julia Réda",
  },
  {
    title: "Réunion Equipage Calembourt",
    date: new Date(),
    hour: "19h30",
    location: "Discord - Salon Julia Réda",
  },
]


export default function Calendar () {
  const classes = useStyles();

  function newDate() {
    let t = new Date()
    t.setHours(0)
    t.setMinutes(0)
    t.setSeconds(0)
    t.setMilliseconds(0)
    return t
  }

  const monthLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  const dayLabels = ['D.', 'L.', 'Ma.', 'Me.', 'J.', 'V.', 'S.', 'D.']
  const dayLongLabels = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
  const milliInADay = 1000 * 60 * 60 * 24

  const activeMonth = newDate().getMonth();
  var firstDayOfMonth = newDate();
  var lastDayOfMonth = newDate();
  var firstDayOfCalendar = newDate();
  var lastDayOfCalendar = newDate();

  firstDayOfMonth.setFullYear(new Date().getFullYear(), activeMonth, 1);
  lastDayOfMonth.setFullYear(new Date().getFullYear(), activeMonth + 1, 0);
  firstDayOfCalendar.setFullYear(new Date().getFullYear(), activeMonth, 2 - firstDayOfMonth.getDay());
  lastDayOfCalendar.setFullYear(new Date().getFullYear(), activeMonth + 1, (7 - lastDayOfMonth.getDay()) % 7);

  var nbOfDayInTheCalendar = (lastDayOfCalendar - firstDayOfCalendar + milliInADay) / milliInADay
  var nbOfWeekInTheCalendar = nbOfDayInTheCalendar / 7

  return (
    <Card className={classes.card}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={[classes.th  , classes.colFirst].join(' ')}></th>
            {[...Array(7).keys()].map(iWeek => {
              return <th key={`${iWeek}-`} className={classes.th}>{dayLongLabels[iWeek+1]}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {[...Array(nbOfWeekInTheCalendar).keys()].map(iWeek => {
            return (
              <tr key={iWeek}>
                <td className={[classes.td, classes.colFirst].join(' ')}> S.{getWeekNumber(new Date())[1]}</td>
                {
                  [...Array(7).keys()].map(iDay => {
                    let date = newDate()
                    date.setFullYear(firstDayOfCalendar.getFullYear(), firstDayOfCalendar.getMonth(), firstDayOfCalendar.getDate() + 7 * iWeek + iDay);
                    return (
                      <td key={`${iWeek}-${iDay}`} className={classes.td}>
                        {dayLabels[date.getDay()]} {date.getDate()}
                        <EventCard event={{
                          title: "Réunion Equipage Calembourt",
                          hour: "19h30",
                          location: "Discord - Salon Julia Réda",
                        }}/><
                          EventCard event={{
                          title: "Réunion Equipage Calembourt",
                          hour: "19h30",
                          location: "Discord - Salon Julia Réda",
                        }}/>
                      </td>
                    )
                  })
                }
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}