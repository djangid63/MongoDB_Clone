import React from 'react'
import { IoIosSettings, IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BiCollapseVertical } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { RiFilter2Fill } from "react-icons/ri";
import { GoCommandPalette } from "react-icons/go";
import { TbDatabaseHeart } from "react-icons/tb";
import { useState } from 'react';




const SideBar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isClusterExpanded, setIsClusterExpanded] = useState(false)
  const [isConnected, setIsConnected] = useState(false);

  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);
  const toggleCluster = () => setIsClusterExpanded(!isClusterExpanded);

  return (
    <section className='w-[20vw] h-[96vh] text-white justify-between items-start font-inter bg-secondary/95 '>
      <div className='flex items-center justify-between pl-3'>
        <div className='text-xl py-2 font-bold'>Compass</div>
        <span className={`text-lg pr-6 pt-2 cursor-pointer ${isSettingsOpen ? 'text-blue-500' : ''}`}
          onClick={toggleSettings}>
          <IoIosSettings />
        </span>
      </div>
      <div className='flex items-center justify-start mt-5 font-medium text-sm pl-3' >
        <span className=' pb-1'><PiBracketsCurlyBold /></span>
        <div className='px-3'>My Queries</div>
      </div>
      <div className='w-[100%] h-[0.2px] my-4 bg-gray-600'></div>
      <div className='flex items-center justify-between mt-5 font-medium text-sm pl-4' >
        <div>Connections</div>
        <div className='flex items-center justify-between mr-7 gap-4'>
          <span className='hidden group-hover:block cursor-pointer'>
            <BiCollapseVertical />
          </span>
          <span className='hidden group-hover:block cursor-pointer'><MdAdd size={18} /></span>
          <span className='hidden group-hover:block cursor-pointer'><BsThreeDots /></span>
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
      {/* Cluster */}
      <div className='flex justify-between pl-3 py-1 mt-3 text-sm hover:bg-gray-600/40 h-10 w-full group'>
        <div className='flex items-center'>
          <span className='cursor-pointer px-1' onClick={toggleCluster}>
            {isClusterExpanded ? <IoMdArrowDropdown size={18} /> : <IoMdArrowDropright size={18} />}
          </span>
          <span className=''><TbDatabaseHeart /></span>
          <div className='font-inter text-[13px] font-semibold mx-1'>cluster0.ygilo.mongod...</div>
        </div>
        <div className={`flex items-center justify-between ${isConnected ? 'gap-3' : 'gap-0.5'}`}>
          {!isConnected && <button onClick={() => setIsConnected(true)} className='hidden group-hover:block py-1 px-3 bg-gray-600/40 hover:bg-gray-400/60 border text-[12px] mx-2 border-gray-400 rounded-lg'>CONNECT</button>}
          <span className={`text-xs cursor-pointer mr-1 hidden group-hover:block ${isConnected ? 'block' : 'hidden'}`}><MdAdd size={18} /></span>
          <span className={`text-xs cursor-pointer hidden group-hover:block ${isConnected ? 'block' : 'hidden'}`}><GoCommandPalette /></span>
          <span className='mr-4 hidden group-hover:block text-xs cursor-pointer'><BsThreeDots /></span>
        </div>
      </div>
    </section>
  )
}

export default SideBar