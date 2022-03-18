import React from 'react'
import Popover from '../../../Helpers/mui/Popover'
import { getColStat } from '../../../Helpers/getColStat'
import EditModal from './Edit'
import AddModal from './Add'

function List({ task, reload, open, setClose }) {
  const status_color = getColStat(task.status)
  const border = 'border-2 border-gray-300 bg-gray-200'
  const [isOpen, setIsOpen] = React.useState(false)

  const openEdit = (e) => {
    setIsOpen(true)
  }
  return (
    <div className="grid grid-cols-5 gap-1 my-1">
      <div className={`${border} col-span-2`} onClick={() => openEdit(task.name)}>{task.name}</div>
      <div className={`${border}`} onClick={() => openEdit(task.name)}>{task.action}</div>
      <div className={`${border}`} onClick={() => openEdit(task.name)}>{task.date}</div>
      <Popover color={status_color} task={task.status}/>
      <EditModal reload={() => reload()} task={task} isOpen={isOpen} setIsOpen={() => setIsOpen(false)} nextAction={task.action} />
    </div>
  )
}

export default List