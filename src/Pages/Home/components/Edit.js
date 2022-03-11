import React from 'react'
import Modal from 'react-modal'
import { Button, Input } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import AutoButton from '../../../Helpers/mui/AutoButton'
import { DateFormating } from '../../../Helpers/DateFormating'
import Popover from './mui/Popover'
import { getColStat } from '../../../Helpers/getColStat'
import { types } from '../../../Helpers/getTypes'

Modal.setAppElement('#root')

const pStyle = 'flex w-32 self-center p-2 rounded-md'

function Edit ({ task, isOpen, setIsOpen, nextAction}) {
  
  const status_color = getColStat(task.status)

  const [name, setName] = React.useState(task.name)
  const [action, setAction] = React.useState(task.action)
  const [date, setDate] = React.useState(task.date)

  const [status, setStatus] = React.useState(task.status)
  const [type, setType] = React.useState(task.type)
  const [strategy, setStrategy] = React.useState(task.strategy)
  const [tracked, setTracked] = React.useState(task.tracked)

  React.useEffect(() => {
    //console.log(name, action, date, status, tracked, strategy, type)
  },[name, action, date, status, tracked, strategy, type])

  const setters = (e) => {
    switch(e[1]) {
      case 'status':
        setStatus(e[0])
        break;
      case 'type':
        setType(e[0])
        break;
      case 'strategy':
        setStrategy(e[0])
        break;
      case 'tracked':
        setTracked(e[0])
        break;
      case 'name':
        setName(e[0])
        break;
      case 'action':
        setAction(e[0])
        break;
      case 'date':
        setDate(e[0])
        break;
    }
  }

  return (
    <Modal 
      isOpen={isOpen}
      shouldCloseOnOverlayClick = {true}
      onRequestClose={() => setIsOpen()}
      style = {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
        {Object.keys(task).map( k => (
          <Inputer key={k} name={k} value={task[k]} setter={(e,state) => setters(e)}/>
        ))}
      </div>
      <div className='sticky bottom-0 z-10 bg-white'>
        <div className='flex justify-center items-center text-white'>
          <button className='flex items-center gap-2 bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white p-1 px-3 m-2 shadow-md rounded-lg font-mono font-bold'
            onClick={() => {
              // setIsOpen(false)
              console.log(name, action, date, status, tracked, strategy, type)
              }}>
            <SaveIcon />SAVE
          </button></div>
      </div>
    </Modal>
  );
}

export default Edit;

function Inputer({variable, name, value, setter}) {
  const status_color = getColStat(value)
  const [val, setVal] = React.useState('')
  const [initVal, setInitVal] = React.useState('')
  React.useEffect(() => {
    switch(types(name)) {
      case 'date':
        setVal(value)
        break;
      case 'digit':
        setVal(value)
        break
      case 'text':
        setInitVal(value)
    } 
  }, [])
  return (
    <>
      <div className='grid grid-cols-1 mx-4 my-3 shadow-sm border border-gray-100'>
        <div className='grid grid-cols-3 gap-2 p-1'>
          <div className='text-lg py-1 px-3 font-bold text-gray-600'>{name}</div>
          {/* Input Type depends on the name */}

          { types(name) === 'date' && (
            <input 
              className={`
                placeholder:italic placeholder:text-slate-400 block
                col-span-2 border border-slate-300 py-2 px-6 rounded-md shadow-sm
                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
                hover:border-sky-500
                `}
              placeholder={value} type={name==='date'?'date':'text'} name="Name" value={val}  
              onFocus={() => setVal(val)} 
              onChange={(e) => {
                setVal(e.target.value)
                setter([e.target.value, name])
              }}
              />
          )}

            { types(name) === 'text'  && ( 
              <input 
              className={`
                placeholder:italic placeholder:text-slate-400 block
                col-span-2 border border-slate-300 py-2 px-6 rounded-md shadow-sm
                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
                hover:border-sky-500
                `}
              placeholder={value} type='text' name="Name" value={val}  
              onFocus={() => {
                if (initVal === value) {
                  setVal(value)
                } 
              }}
              onChange={(e) => {
                setVal(prev => e.target.value)
                setInitVal(prev => e.target.value)
                setter([e.target.value, name])
                }
              }/>
            )
            }        

            { types(name) === 'digit' && (
              <div className='col-span-2 text-md font-bold'>
                <Popover className={`
                  font-mono w-full
                  placeholder:italic placeholder:text-slate-400 block
                  col-span-2 border border-slate-500 py-2 px-6 rounded-md shadow-sm
                  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
                  hover:border-sky-500 m-0
                  `} 
                  color={getColStat(val)} 
                  task={val} 
                  onChanging={(e) => {
                    setVal(e)
                    setter([e, name])
                  }}
                  />
              </div>
            )}
        </div>
      </div>
    </>
  );
}