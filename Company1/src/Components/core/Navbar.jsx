import React from 'react'
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex  flex-col md:flex-row justify-between items-center p-4 md:p-8 gap-2 w-full border-2 md:h-20'>
      <div className='text-3xl mb-4 md:mb-0'>
        <FaHome />
      </div>
      <h1 className='text-xl md:text-2xl font-bold mb-4 md:mb-0'>Search Property to rent</h1>
      <div className='flex gap-2'>
        <input type="text" placeholder='search' className='border-2 p-2 rounded-md' />
        <button className='bg-white text-black border-2 border-black p-2 rounded-md transition-colors duration-300 hover:bg-black hover:text-white'>Search</button>
        <button className='bg-white text-black border-2 border-black p-2 rounded-md transition-colors duration-300 hover:bg-black hover:text-white'>Liked</button>
      </div>
    </div>
  )
}

export default Navbar
