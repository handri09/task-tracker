import React from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
Modal.setAppElement('#root')

export default function Editable ({ task, isOpen, setIsOpen, nextAction, handleChange }) {
  return (
    <Modal 
      isOpen={isOpen}
      shouldCloseOnOverlayClick = {false}
      onRequestClose={() => setIsOpen()}
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

      <h1>{task.description}</h1>
      <label for='nextAction'> Next Action
        <input type='text' className={`bg-gray-200 m-0.5 col-span-3 truncate border-2 border-black p-2 ${nextAction && 'nhidden'}`} 
        onChange={(e)=> handleChange(e.target.value)}/>
      </label>
      <br />
      <Button variant='outlined' onClick={() => setIsOpen(false)}>Close Modal</Button>
    </Modal>
  );
}