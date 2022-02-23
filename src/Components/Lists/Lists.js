import './Lists.css'
import React from 'react'
import List from './List'
import { tasks } from '../../Utils/Data'

function Lists(props) {
  const tasksFilt = tasks.map((task) => {
    return {
      ...task, 
      duration: (task.endDate-task.startDate)/1000,
    }
  })
  
  tasksFilt.sort((a,b)=> a.duration-b.duration)
  console.log(tasks)
  console.log(tasksFilt)
  return (
    <div className='lists'>
      {tasksFilt.map((task) => (
        <List key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default Lists