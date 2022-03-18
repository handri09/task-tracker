import React from 'react'
import NavBar from '../../Components/NavBar'
import Lists from './components/Lists'
import AddIcon from '@mui/icons-material/Add'
import {Add} from './components'

function Home() {
  const [open, setOpen] = React.useState(false)
  const [reloading, setReloading] = React.useState(false)

  return (
    <>
      <NavBar />  
      <Lists open={open} setClose={() => setOpen(false)} reloading={reloading}/>
      <button 
        className={`
          fixed bottom-0 right-0 mr-5 mb-5
          h-10 w-10 bg-sky-800 p-10 shadow-lg
          flex justify-center items-center
          text-white font-bold text-4xl
          rounded-full
        `}
        onClick={() => {
          setOpen((prev)=> !prev)
        }}

        ><AddIcon /></button>
        <Add reload={() => setReloading((prev) => !prev)} isOpen={open} setIsOpen={() => setOpen()}/>
    </>
  )
}

export default Home;