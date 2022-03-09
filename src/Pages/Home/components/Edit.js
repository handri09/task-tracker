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
            width: '90vw',
            height: '80vh',
            margin: 'auto',
            background: 'white',
            borderRadius: '1%',
            shadow: '10%'
          }
        }
      }
      >
      <div className='grid grid-cols-2 font-mono font-bold text-2xl'>
        <div className='flex justify-start ml-5'>{task.name}</div>
        <div className='flex justify-end'>
          <button className='flex items-center justify-center p-1 h-10 w-10 rounded-full border-2 border-red-700 text-red-500 hover:bg-red-500 hover:text-white text-xl' onClick={() => setIsOpen(false)}>x</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 ">

        <div className=''>
          <div className='flex my-3 shadow-lg hover:shadow-xl hover:border-black border-2'>
            <p className={pStyle}>Task Name: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Action: </p>
            <Input value={action} onChange={(e) => setAction(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Date: </p>
            <Input type='date' value={date} className='my-2 mx-7 w-full' onChange={(e) => setDate(e.target.value)}/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Status: </p>
            <AutoButton placeholder='Status' defVal={task.status} setStatus={(e) => setStatus(e)}/>
          </div>  



          <div className='flex my-3'>
            <p className={pStyle}>Type: </p>
            <AutoButton placeholder='Type' defVal={task.status} setStatus={(e) => setStatus(e)}/>
          </div> 
          <div className='flex my-3'>
            <p className={pStyle}>Strategy: </p>
            <AutoButton placeholder='Strategy' defVal={task.status} setStatus={(e) => setStatus(e)}/>
          </div> 
          <div className='flex my-3 shadow-lg hover:shadow-xl hover:border-black border-2'>
            <p className={pStyle}>Reference: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3 shadow-lg hover:shadow-xl hover:border-black border-2'>
            <p className={pStyle}>End User: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3 shadow-lg hover:shadow-xl hover:border-black border-2'>
            <p className={pStyle}>EndUser Departement: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3 shadow-lg hover:shadow-xl hover:border-black border-2'>
            <p className={pStyle}>State : </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3 shadow-lg hover:shadow-xl hover:border-black border-2'>
            <p className={pStyle}>Responsible: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3 shadow-lg hover:shadow-xl hover:border-black border-2'>
            <p className={pStyle}>SOW SRF Received: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>

        </div>

        <div className=''>
          <div className='flex my-3'>
            <p className={pStyle}>Task Name: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Action: </p>
            <Input value={action} onChange={(e) => setAction(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Date: </p>
            <Input type='date' value={date} className='my-2 mx-7 w-full' onChange={(e) => setDate(e.target.value)}/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Status: </p>
            <AutoButton placeholder='Status' defVal={task.status} setStatus={(e) => setStatus(e)}/>
          </div>
        </div>

        <div className=''>
          <div className='flex my-3'>
            <p className={pStyle}>Task Name: </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Action: </p>
            <Input value={action} onChange={(e) => setAction(e.target.value)} className='my-2 mx-7 w-full'/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Date: </p>
            <Input type='date' value={date} className='my-2 mx-7 w-full' onChange={(e) => setDate(e.target.value)}/>
          </div>
          <div className='flex my-3'>
            <p className={pStyle}>Status: </p>
            <AutoButton placeholder='Status' defVal={task.status} setStatus={(e) => setStatus(e)}/>
          </div>

        </div>

        {/* <div className='flex justify-center'>
          <Button variant="contained" endIcon={<SaveIcon/>} onClick={() => console.log(name, action, date, status)}>Save</Button>
        </div> */}
      </div>
    </Modal>
  );
}

export default Edit;