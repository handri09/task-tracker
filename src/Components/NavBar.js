import React from 'react'
const style_nav = `
  m-2 p-2 rounded-md 
  hover:text-green-800 hover:underline 
  underline-offset-8 decoration-green-800 decoration-2`;

function NavBar() {
  return (
    <nav className='font-mono sticky top-0 bg-white'>
      <ul className='flex justify-center shadow-md'>
        <div className={`${style_nav}`}>ToDos</div>
        <div className={`${style_nav}`}>Steps</div>
        <div className={`${style_nav}`}>Priorities</div>
      </ul> 
    </nav>
  )
}

export default NavBar