import React from 'react'
import Popover from '../mui/Popover'
import { Avatar, Button } from '@mui/material'
import Modal from 'react-modal'
import convertExcelDate from '../../Helpers/ConvertExcelDate'
import AvatarGroup from '@mui/material/AvatarGroup'
import DatePicker from '../mui/DatePicker'
import DP from '../mui/DP'
const { useState, useEffect } = React


Modal.setAppElement('#root')

function List({ task }) {
  /*
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
  }*/
 
  // Define Status color
  // New - Ongoing - On hold - Done - Cancelled
  let status_color = 'text-white m-0.5'
  switch(task.status) {
    case 'New':
      status_color = 'bg-red-500 '+status_color
      break;
    case 'Ongoing':
      status_color = 'bg-orange-400 '+status_color
      break;
    case 'On hold':
      status_color = 'bg-sky-500 '+status_color
      break;
    case 'Done':
      status_color = 'bg-green-500 '+status_color
      break;
    case 'Cancelled':
      status_color = 'bg-gray-400 '+status_color
      break;
  }

  const [isOpen, setIsOpen] = useState(false)
  const [hide, setHide] = useState(true)
  // console.log(day, hour, minute, hour, second)
  // console.log(day + ' - ' + hh + ':' + min + ':' + ss)

  return (
    <div className='grid grid-cols-8 text-center items-center font-mono p-x-2' > {/*items-center place-items-center justify-items-stretch */}
      {/* <Button onClick={() => setIsOpen(true)}>Open Modal</Button> */}
      <div className='bg-gray-200 m-0.5 col-span-2 truncate border-2 border-black p-2'>{task.description}</div>
      <div className='bg-gray-200 m-0.5 col-span-3 truncate border-2 border-black p-2'>{task.nextAction ? task.nextAction : 'None'}</div> 
      <div className={`bg-gray-200 m-0.5 border-2 border-black p-2 ${!hide && 'hidden'}`}
        onClick={() => setHide(hide => !hide)}
        >{task.sowSrfReceived ? convertExcelDate(parseInt(task.sowSrfReceived)) : convertExcelDate()}</div>
      {/* <div className='bg-gray-200 m-0.5 '>{day + ' - ' + hh + ':' + min + ':' + ss}</div> */}
      {/* <DatePicker /> */}
      <DP hide={hide} />
      <AvatarGroup className='grid bg-gray-200 m-0.5 justify-items-center content-center items-center border-2 border-black '>
        { task.responsible.map(name => (
          <Avatar src={`./${name.toLowerCase()}.jpg`} alt={`${name}.jpg`} key={name} className='uppercase' />
        ))}
      </AvatarGroup> 
      {/* <div className={task.status === 'Done' ? 'bg-green-400 text-white m-0.5' : (task.status === 'Stuck' ? 'bg-red-500 text-white m-0.5 ' : 'bg-orange-400 text-white m-0.5 ')}>{task.status}</div>  */}
      {/* <div className={status_color}>{task.status}</div> */}
      <Popover color={status_color} task={task.status} />
      {/* <Button variant='outlined' onClick={() => setIsOpen(true)}>Edit</Button> */}
      <Modal 
        isOpen={isOpen}
        shouldCloseOnOverlayClick = {false}
        onRequestClose={() => setIsOpen(false)}
        style={
          {
            overlay: {
              background: 'rgba(220, 220,220,0.5)'
            },
            content: {
              color: 'orange', 
              width: '50vw',
              height: '50vh',
              margin: 'auto',
            }
          }
        }
        >
        <h1>Modal is Opened</h1>
        <p>{task.description}</p>
        <Button variant='outlined' onClick={() => setIsOpen(false)}>Close Modal</Button>
      </Modal>
    </div>
  )
}

export default List