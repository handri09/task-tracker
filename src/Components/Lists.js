import React from 'react'
import List from './List'
import { tasks } from '../Utils/tasks'

const border = ''

function Lists() {
  return (
    <>
      <div className="my-1 font-mono text-center">
        
        {/* Table Head */}
        <div className="sticky top-14 grid grid-cols-5 gap-1 my-1 font-bold mt-5 bg-gray-50 border-2 border-gray-100">
          <div className={`${border} col-span-2`}> Name</div>
          <div className={`${border}`}>Action</div>
          <div className={`${border}`}>Date</div>
          <div className={`${border}`}>Status</div>
        </div>
        
        {/* List */}
        { tasks.map( task => <List key={task.name} task={task}/> )}
      </div>
    </>
  )
}

export default Lists

