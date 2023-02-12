import React, { useEffect } from 'react';
import { monthName } from './util';
import './App.css'

export default function (props) {
  const [givenMonth, setMonth] = React.useState('');
  const [year, month, day] = props.date.split('-');
  const today = new Date(props.date);
  const presentMonth = today.getMonth();
  const presentYear = today.getFullYear();
  const daysInMonth = new Date(presentYear, presentMonth + 1, 0).getDate();
  const monthStart = new Date(presentYear, presentMonth, 1).getDay();

  useEffect(() => {
    let m = monthName(parseInt(month));
    setMonth(m);
  }, []);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colspan="7" className="table-head">
              {givenMonth} {year}
            </th>
          </tr>
          <tr>
            {weekDays.map((weekday, index) => {
              return (
                <th className="weekDay" key={index} colspan="1">
                  {weekday}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil((daysInMonth + monthStart) / 7))
            .fill(0)
            .map((_, weekIndex) => (
              <tr key={weekIndex}>
                {Array(7)
                  .fill(0)
                  .map((_, dayIndex) => {
                    const calDay = weekIndex * 7 + dayIndex + 1 - monthStart;
                    const highLighted = parseInt(day) === calDay;
                    if (calDay <= 0 || calDay > daysInMonth) {
                      return <td classNAme="day" key={dayIndex}></td>;
                    }

                    return (
                      <td
                        className="day"
                        key={dayIndex}
                        style={{
                          backgroundColor: highLighted ? '#B05A7A' : 'white',
                        }}
                      >
                        {calDay}
                      </td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
