import React from 'react'

function List({ task }) {
  let second = (task.endDate-task.startDate)/1000
  let minute = parseInt(second/60)
  let hour =  parseInt(minute/60)
  let day = parseInt(hour/24)

  // illustration DAY - Hour:Min:ss
  let ss = second - minute*60
  let min = minute - hour*60
  let hh = hour - day*24

  // console.log('day:',day,'hh:',hh,'min:',min,'ss:', ss)
  // Formating 
  if (ss.toString().split('').length === 1) {
      ss = `0${ss}`
  }
  if (min.toString().split('').length === 1) {
      min = `0${min}`
  }
  if (hh.toString().split('').length === 1) {
      hh = `0${hh}`
  }
  if (day.toString().split('').length === 1) {
      day = `0${day}`
  }
 
  // console.log(day, hour, minute, hour, second)
  // console.log(day + ' - ' + hh + ':' + min + ':' + ss)
  return (
    <div className='grid grid-cols-5 gap-0'>
      <div className='bg-gray-200 m-0.5 text-center'>{task.name}</div>
      <div className='bg-gray-200 m-0.5 text-center'>{task.id}</div>
      <div className='bg-gray-200 m-0.5 text-center'>{day + ' - ' + hh + ':' + min + ':' + ss}</div>
      <div className={task.status === 'Done' ? 'bg-green-400 text-white m-0.5 text-center' : (task.status === 'Stuck' ? 'bg-red-500 text-white m-0.5 text-center' : 'bg-orange-400 text-white m-0.5 text-center')}>{task.status}</div> 
      <div className='bg-gray-200 m-0.5 text-center'>{task.responsible}</div> 
    </div>
  )
}

export default List