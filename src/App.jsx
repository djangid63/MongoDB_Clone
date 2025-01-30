import React from 'react'
import Navbar from './Components/navbar'
import SideBar from './Components/SideBar'
import Welcome from './Pages/Welcome'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Welcome />
    </div>
  )
}

export default App
