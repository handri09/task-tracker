import './Nav.css'
import React from 'react'

function Nav() {
  return (
    <nav className='border-2 border-red-600 font-mono'>
      <ul className='flex justify-center border-2 border-gray-600 '>
        <div className='border-2 border-sky-900 m-2 p-2 rounded-md hover:bg-sky-900 hover:text-white'>ToDos</div>
        <div className='border-2 border-sky-900 m-2 p-2 rounded-md hover:bg-sky-900 hover:text-white'>Steps</div>
        <div className='border-2 border-sky-900 m-2 p-2 rounded-md hover:bg-sky-900 hover:text-white'>Priorities</div>
      </ul> 
    </nav>
  )
}

export default Nav