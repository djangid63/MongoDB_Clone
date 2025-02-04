import React, { useEffect } from 'react'
import SideBar from '../Components/SideBar'

const Welcome = () => {
  return (
    <section className='grid grid-cols-[20vw_80vw]'>
      <div>
        <SideBar />
      </div>
      <div className='w-[80vw] h-[100%] bg-primary'></div>
    </section>
  )
}

export default Welcome
