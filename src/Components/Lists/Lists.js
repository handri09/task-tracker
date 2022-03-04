import React from 'react'
import List from './List'
import { tasks_ } from '../../Utils/Data'

function Lists(props) {
  const tasksFilt = tasks_.map((task) => {
    return {
      ...task, 
      duration: (task.endDate-task.startDate)/1000,
    }
  })
  
  tasksFilt.sort((a,b)=> a.duration-b.duration)
  console.log(tasksFilt)

  return (
    <div className=''>

      <div className='grid grid-cols-8 text- text-lg font-mono'>
        <div className='bg-gray-300 m-0.5 text-blue-600 col-span-2 text-center self-align-start '>Task</div>
        <div className='bg-gray-300 m-0.5 text-center col-span-3'>Action</div>
        <div className='bg-gray-300 m-0.5 text-center'>Date</div>
        <div className='bg-gray-300 m-0.5 text-center'>Person</div> 
        <div className='bg-gray-300 m-0.5 text-center'>Status</div> 
        {/* <div className='bg-gray-300 m-0.5 text-center'>Update</div>  */}
      </div>

      {tasksFilt.map((task) => (
        <List key={task.sourcingDescription} task={task}/>
      ))}
    </div>
  )
}

export default Lists