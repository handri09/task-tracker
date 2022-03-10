import React from 'react'
import Modal from 'react-modal'
import { Button, Input } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AutoButton from '../../../Helpers/mui/AutoButton'
import { DateFormating } from '../../../Helpers/DateFormating'
import Popover from './mui/Popover'
import { getColStat } from '../../../Helpers/getColStat'

Modal.setAppElement('#root')

const pStyle = 'flex w-32 self-center p-2 rounded-md'

function Edit ({ task, isOpen, setIsOpen, nextAction}) {
  const status_color = getColStat(task.status)
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
            width: '80vw',
            height: '80vh',
            padding: 0,
            margin: 'auto',
            background: 'white',
            borderRadius: '1.5%',
          }
        }
      }
      >
      <div className='sticky top-0 z-10 bg-white grid grid-cols-2 font-mono font-bold text-2xl shadow-md '>
        <div className='flex justify-start items-center ml-5 text-gray-500'>{task.name}</div>
        <div className='flex justify-end items-start p-1'>
          <button className='flex items-center justify-center p-1 h-5 w-5 rounded-full border border-red-400 text-red-500 hover:bg-red-500 hover:text-white text-xl' onClick={() => setIsOpen(false)}>x</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 border border-red-800">
        {Object.keys(task).map( k => (
          <Inputer key={k} name={k} value={task[k]}/>
        ))}
      </div>
      <div className='h-5 mb-5'></div>
    </Modal>
  );
}

export default Edit;

function Inputer({variable, name, value}) {
  const status_color = getColStat(value)
  const [val, setVal] = React.useState('')
  React.useEffect(() => {
    if (name==='date') {
      setVal(prev => value)
    }

    if (name==='status') {
      setVal(prev => value)
    }
  }, [])
  return (
    <>
      <div className='grid grid-cols-1 mx-4 my-3 shadow-sm border border-gray-100'>
        <div className='grid grid-cols-3 gap-2 p-1'>
          <div className='text-lg py-1 px-3 font-bold text-gray-600'>{name}</div>

          {/* Input Type depends on the name */}

          { name === 'date' && (
            <input 
              className={`
                placeholder:italic placeholder:text-slate-400 block
                col-span-2 border border-slate-300 py-2 px-6 rounded-md shadow-sm
                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
                hover:border-sky-500
                `}
              placeholder={value} type={name==='date'?'date':'text'} name="Name" value={val}  
              onFocus={() => setVal(val)} 
              onChange={(e) => setVal(prev => e.target.value) }
              />
          )}

          { name === 'status' &&
            (
              <div className='col-span-2 text-md font-bold'>
                <Popover color={getColStat(val)} task={val} className={`
                font-mono w-full
                placeholder:italic placeholder:text-slate-400 block
                col-span-2 border border-slate-500 py-2 px-6 rounded-md shadow-sm
                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
                hover:border-sky-500 m-0
                `} 
                  onChanging={(e) => setVal(e)}
                  />
              </div>
            )}
            { (name !== 'status' && name !== 'date')  &&( 
              <input 
              className={`
                placeholder:italic placeholder:text-slate-400 block
                col-span-2 border border-slate-300 py-2 px-6 rounded-md shadow-sm
                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
                hover:border-sky-500
                `}
              placeholder={value} type={name==='date'?'date':'text'} name="Name" value={val}  
              onFocus={() => setVal(value)} 
              onChange={(e) => {
                setVal(prev => e.target.value)
                console.dir(e.target.value)
                }
              }
              />
            )
            }        
        </div>
      </div>
    </>
  );
}