import React from 'react'
import { FaRegSun } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className='flex w-[20vw] border-2 border-amber-100 justify-between'>
      <div className=''>Compass</div>
      <span><FaRegSun /></span>
    </div>
  )
}

export default SideBar
