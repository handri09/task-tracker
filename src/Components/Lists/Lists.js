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
  
  React.useEffect(()=>{

      fetch('https://aiskon.deta.dev/',{
        method: 'GET',
        headers: {
        'X-Deepseek-Api-Key': 'a0kybe7b_1K7gHWq6hnxrKXFD3JSmSBQ2AHDggQn7',
        'Content-Type': 'application/json',
      }
    })
    .then(task => task.json())
    .then(task => console.log(task))
  }, [])

  tasksFilt.sort((a,b)=> a.duration-b.duration)
  console.log(tasksFilt)

  // className basics 
  const className = 'bg-gray-300 m-0.5 text-center'

  return (
    <div className={className}>

      <div className='grid grid-cols-8 text- text-lg font-mono'>
        <div className={`${className} text-blue-600 col-span-2 self-align-start`}>Task</div>
        <div className={`${className} col-span-3`}>Action</div>
        <div className={className}>Date</div>
        <div className={className}>Person</div> 
        <div className={className}>Status</div> 
      </div>

      {tasksFilt.map((task) => (
        <div key={task.sourcingDescription} className='grid grid-cols-8 text-center items-center font-mono p-x-2' >
          <List task={task} key={task.sourcingDescription} />
        </div>
      ))}
    </div>
  )
}

export default Lists