import React from 'react'
import { IoIosSettings, IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BiCollapseVertical } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { RiFilter2Fill } from "react-icons/ri";
import { GoCommandPalette } from "react-icons/go";
import { TbDatabaseHeart } from "react-icons/tb";




const SideBar = () => {
  return (
    <section className='w-[20vw] h-[96vh] text-white justify-between items-start font-inter bg-secondary '>
      <div className='flex items-center justify-between pl-3'>
        <div className='text-xl py-2 font-bold'>Compass</div>
        <span className='text-lg pr-6 pt-2'><IoIosSettings /></span>
      </div>
      <div className='flex items-center justify-start mt-5 font-medium text-sm pl-3' >
        <span className=' pb-1'><PiBracketsCurlyBold /></span>
        <div className='px-3'>My Queries</div>
      </div>
      <div className='w-[100%] h-[0.2px] my-4 bg-gray-600'></div>
      <div className='flex items-center justify-between mt-5 font-medium text-sm pl-4' >
        <div>Connections</div>
        <div className='flex items-center justify-between mr-7 gap-4'>
          <span><BiCollapseVertical /></span>
          <span ><MdAdd size={18} /></span>
          <span><BsThreeDots /></span>
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex justify-start items-center mt-5 pl-3 gap-2 font-inter">
        <input
          type="text"
          placeholder="Search connections"
          className="w-[82%] p-2 pl-5 bg-[#0A2A37] text-white rounded-md outline-none focus:ring-2 focus:ring-blue-600"
        />
        <span className="text-white text-xl p-2"><RiFilter2Fill /></span>
      </div>

      <div className='flex justify-between pl-3 py-1 mt-3 text-sm bg-gray-600/40'>
        <div className='flex items-center'>
          <span className='hidden '><IoMdArrowDropdown /></span>
          <span className='text-xl'><IoMdArrowDropright /></span>
          <span className=' '><TbDatabaseHeart /></span>
          <div className='font-inter px-2  font-semibold'>cluster0.ygilo.mongodb.net</div>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-xs'><MdAdd size={18} /></span>
          <span className='text-xs'><GoCommandPalette /></span>
          <span className='text-xs mr-4'><BsThreeDots /> </span>
        </div>
      </div>
    </section>
  )
}

export default SideBar