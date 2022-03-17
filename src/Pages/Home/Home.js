import React from 'react'
import NavBar from '../../Components/NavBar'
import Lists from './components/Lists'
import AddIcon from '@mui/icons-material/Add'
import { OpenInNew } from '@mui/icons-material'

function Home() {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    //console.log(open)
  }, [open] )
  return (
    <>
      <NavBar />  
      <Lists open={open} setClose={() => setOpen(false)}/>
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
    </>
  )
}

export default Home;