import React from 'react'
import List from './List'
import { tasks } from '../../../Utils/tasks'

const border = ''

function Lists({ open, setClose }) {
  const [tasks_, setTask] = React.useState(tasks)
  // const [open_, setOpen] = React.useState(open)

  React.useEffect(() => {
    reload()
  }, [])

  // React.useEffect(() => {
  //   console.log(open_)
  // }, [open_])

  // console.log(open)
  const reload = () => {
    fetch('https://aiskon.deta.dev/',
      {
        method: 'GET',
        headers: {
        'X-Deepseek-Api-Key': 'a0kybe7b_1K7gHWq6hnxrKXFD3JSmSBQ2AHDggQn7',
        'Content-Type': 'application/json',
      }
    })
    .then(task => task.json())
    .then(task => setTask(task[0]))
  }

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
        { tasks_.map( (task, index) => <List key={index} open={open} setClose={() => setClose()} task={task} reload={() => reload()}/> )}
      </div>
    </>
  )
}

export default Lists

