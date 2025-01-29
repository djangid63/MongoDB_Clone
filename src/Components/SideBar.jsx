import React from 'react'
import { IoIosSettings } from "react-icons/io";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BiCollapseVertical } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

const SideBar = () => {
  return (
    <section className='w-[20vw] h-[96vh] text-white justify-between items-start font-inter bg-secondary'>
      <div className='flex items-center justify-between'>
        <div className='text-xl p-2 font-bold'>Compass</div>
        <span className='text-lg pr-6 pt-2'><IoIosSettings /></span>
      </div>
      <div className='flex items-center justify-start mt-5 font-medium text-sm' >
        <span className='pl-2 pb-1'><PiBracketsCurlyBold /></span>
        <div className='px-3'>My Queries</div>
      </div>
      <div className='w-[100%] h-[0.2px] my-4 bg-gray-600'></div>
      <div className='flex items-center justify-between mt-5 font-medium text-sm' >
        <div>Connections</div>
        <div className='flex items-center justify-between mr-5 gap-4'>
          <span><BiCollapseVertical /></span>
          <span className=''><MdAdd /></span>
          <span><BsThreeDots /></span>
        </div>
      </div>
    </section>
  )
}

export default SideBar