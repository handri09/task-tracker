import './List.css'
import React from 'react'

function List({ task }) {
  let second = (task.endDate-task.startDate)/1000
  let minute = parseInt(second/60)
  let hour =  parseInt(minute/60)
  let day = parseInt(hour/24)

  // illustration DAY - Hour:Min:ss
  const ss = second - minute*60
  const min = minute - hour*60
  const hh = hour - day*24
 
  // console.log(day, hour, minute, hour, second)
  // console.log(day + ' - ' + hh + ':' + min + ':' + ss)
  return (
    <div className='list'>
      {task.id} | {day + ' - ' + hh + ':' + min + ':' + ss} | {task.name} 
    </div>
  )
}

export default List