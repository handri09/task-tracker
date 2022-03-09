import React from 'react'
import Modal from 'react-modal'
import { Button, Input } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AutoButton from '../../../Helpers/mui/AutoButton'
import { DateFormating } from '../../../Helpers/DateFormating'

Modal.setAppElement('#root')

const pStyle = 'flex w-32 self-center p-2 rounded-md'

function Edit ({ task, isOpen, setIsOpen, nextAction}) {
  const [name, setName] = React.useState(task.name)
  const [action, setAction] = React.useState(task.action)
  const [date, setDate] = React.useState(task.date)
  const [status, setStatus] = React.useState(task.status)
  return (
    <Modal 
      isOpen={isOpen}
      shouldCloseOnOverlayClick = {true}
      onRequestClose={() => setIsOpen()}
      style={
        {
          overlay: {
            background: 'rgba(220, 220, 220, 0.7)',
          },
          content: {
            width: '50vw',
            height: '80vh',
            margin: 'auto',
            background: 'white',
            borderRadius: '1%',
            shadow: '10%'
          }
        }
      }
      >
      <div className="">
        <div className='flex justify-end'>
          <Button variant='contained' size='small' color='error' onClick={() => setIsOpen(false)}>X</Button>
        </div>
        <div className='flex my-3'>
          <p className={pStyle}>Task Name: </p><Input value={name} onChange={(e) => setName(e.target.value)} className='m-3 w-full'/>
        </div>
        <div className='flex my-3'>
          <p className={pStyle}>Action: </p><Input value={action} onChange={(e) => setAction(e.target.value)} className='m-3 w-full'/>
        </div>
        <div className='flex my-3'>
          <p className={pStyle}>Date: </p><Input type='date' value={date} className='m-3 w-full' onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className='flex my-3'>
          <p className={pStyle}>Status: </p><AutoButton placeholder='Status' defVal={task.status} setStatus={(e) => setStatus(e)}/>
        </div>

        <div className='flex justify-center'>
          <Button variant="contained" endIcon={<SaveIcon/>} onClick={() => console.log(name, action, date, status)}>Save</Button>
        </div>
      </div>
    </Modal>
  );
}

export default Edit;