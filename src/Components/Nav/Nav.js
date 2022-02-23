import './Nav.css'
import React from 'react'

function Nav() {
  return (
    <div className='nav'>
      <ul>
        <button>ToDos</button>
        <button>Steps</button>
        <button>Priorities</button>
      </ul>
    </div>
  )
}

export default Nav