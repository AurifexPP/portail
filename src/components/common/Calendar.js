import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Widgets } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    borderCollapse: "collapse",
    width: "100%"
  },
  td: {
    border: "1px solid #333"
  },
})

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
  const dayLabels = ['D.', 'L.', 'Ma.', 'Me.', 'J.', 'V.', 'S.']
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

  // 0 0
  // 6 1
  // 5 2

  return (
    <div>
    <div>{monthLabels[activeMonth]}</div>
      <div>premier jour du mois</div>
      <div>{firstDayOfMonth.toLocaleString()}</div>
      <div>{dayLabels[firstDayOfMonth.getDay()]}</div>
      <div>dernier jour du mois</div>
      <div>{lastDayOfMonth.toLocaleString()}</div>
      <div>{dayLabels[lastDayOfMonth.getDay()]}</div>
      <div>premier jour du calendrier</div>
      <div>{firstDayOfCalendar.toLocaleString()}</div>
      <div>{dayLabels[firstDayOfCalendar.getDay()]}</div>
      <div>dernier jour du calendrier</div>
      <div>{lastDayOfCalendar.toLocaleString()}</div>
      <div>{dayLabels[lastDayOfCalendar.getDay()]}</div>
      <div>nb de semaines</div>
      <div>{nbOfWeekInTheCalendar}</div>
      <table className={classes.table}>
        <tbody>
          {[...Array(nbOfWeekInTheCalendar).keys()].map(iWeek => {
            return (
              <tr key={iWeek}>
                {
                  [...Array(7).keys()].map(iDay => {
                    let date = newDate()
                    date.setFullYear(firstDayOfCalendar.getFullYear(), firstDayOfCalendar.getMonth(), firstDayOfCalendar.getDate() + 7 * iWeek + iDay);
                    return (
                      <td key={`${iWeek}-${iDay}`} className={classes.td}>{dayLabels[date.getDay()]} {date.getDate()}</td>
                    )
                  })
                }
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}