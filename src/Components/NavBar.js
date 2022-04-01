import React from 'react'
import { Link } from 'react-router-dom'

const style_nav = `
  m-2 p-2 rounded-md 
  hover:text-green-800 hover:underline 
  underline-offset-8 decoration-green-800 decoration-2`;

const activated = "underline text-green-600 underline-offset-8 decoration-green-600 decoration-2"
function NavBar({active}) {
  return (
    <nav className='font-mono sticky top-0 bg-white'>
      <ul className='flex justify-center shadow-md'>
        <Link to="/task-tracker/" className={`${style_nav} ${active==="home" && activated}`}>ToDos</Link>
        <Link to="/task-tracker/priorities" className={`${style_nav} ${active==="priorities" && activated}`}>Priorities</Link>
      </ul> 
    </nav>
  )
}

export default NavBar