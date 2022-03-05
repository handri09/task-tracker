import React from 'react'
import Popover from '../mui/Popover'
import { Avatar, Button } from '@mui/material'
import convertExcelDate from '../../Helpers/ConvertExcelDate'
import AvatarGroup from '@mui/material/AvatarGroup'
import DatePicker from '../mui/DatePicker'
import DP from '../mui/DP'
import { debounce } from 'throttle-debounce'
import Editable from './Editable'
const { useState, useEffect } = React

function List({ task }) {
 
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
  const [nextAction, setNextAction] = useState(true)
  const handleChange = debounce(2000, false, query => {
    console.log(query)
    setNextAction(action => !action)
  })

  return (
    <div className='grid grid-cols-8 text-center items-center font-mono p-x-2' > {/*items-center place-items-center justify-items-stretch */}
      {/* <Button onClick={() => setIsOpen(true)}>Open Modal</Button> */}
      <div className='bg-gray-200 m-0.5 col-span-2 truncate border-2 border-black p-2'
        onClick={() => setIsOpen(true)}
        >{task.description}</div>
     
      <div className={`bg-gray-200 m-0.5 col-span-3 truncate border-2 border-black p-2 ${!nextAction && 'hidden'}`}
        onClick={() => setNextAction(action => !action)}
        >{task.nextAction ? task.nextAction : 'None'}</div> 
      <input type='text' className={`bg-gray-200 m-0.5 col-span-3 truncate border-2 border-black p-2 ${nextAction && 'hidden'}`} 
        onChange={(e)=> handleChange(e.target.value)}/>
      
      <div className={`bg-gray-200 m-0.5 border-2 border-black p-2 ${!hide && 'hidden'}`}
        onClick={() => setHide(hide => !hide)}
        >{task.sowSrfReceived ? convertExcelDate(parseInt(task.sowSrfReceived)) : convertExcelDate()}</div>
      {/* <div className='bg-gray-200 m-0.5 '>{day + ' - ' + hh + ':' + min + ':' + ss}</div> */}
      {/* <DatePicker /> */}
      <DP hide={hide} show={() => setHide(hide => !hide)}/>
      <AvatarGroup className='grid bg-gray-200 m-0.5 justify-items-center content-center items-center border-2 border-black '>
        { task.responsible.map(name => (
          <Avatar src={`./${name.toLowerCase()}.jpg`} alt={`${name}.jpg`} key={name} className='uppercase' />
        ))}
      </AvatarGroup> 
      {/* <div className={task.status === 'Done' ? 'bg-green-400 text-white m-0.5' : (task.status === 'Stuck' ? 'bg-red-500 text-white m-0.5 ' : 'bg-orange-400 text-white m-0.5 ')}>{task.status}</div>  */}
      {/* <div className={status_color}>{task.status}</div> */}
      <Popover color={status_color} task={task.status} />
      {/* <Button variant='outlined' onClick={() => setIsOpen(true)}>Edit</Button> */}
      <Editable task={task} isOpen={isOpen} setIsOpen={() => setIsOpen(false)} nextAction={nextAction}
        handleChange={(e) => handleChange(e)}/>
    </div>
  )
}

export default List