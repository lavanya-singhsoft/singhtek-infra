
import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import Button from '../../components/Button';

export default function Projplancard({title,num}:any) {
  return (
    <div className=''>
      <div className='group border-b-2  border-[#FF602E]'>
        <div className='transition-all duration-500 group-hover:bg-blue-950 group-hover:scale-125 w-80 h-[450px] p-16 border group-hover:border-transparent group-hover:shadow-2xl'>
          <div className='text-blue-950 text-xl font-semibold transition-all duration-500 group-hover:text-white'>{title}</div>
          <div>
            <div className='flex pt-6'>
              <h1 className='text-blue-950 text-7xl font-semibold transition-all duration-500 group-hover:text-white'>{num}</h1>
              <div>
                <FaDollarSign className='text-blue-950 text-4xl transition-all duration-500 group-hover:text-white'/>
                <h6 className='text-gray-600 text-xs tracking-tight uppercase pt-3 transition-all duration-500 group-hover:text-white'>monthly</h6>
              </div>
            </div>
          </div>

          <div className='pt-4 '>
            <div className='flex gap-2 py-1'>
              <IoCheckmarkOutline className='text-gray-600 text-lg tracking-wide transition-all duration-500 group-hover:text-white' />
              <h6 className='text-gray-600 text-sm tracking-wide transition-all duration-500 group-hover:text-white'>Web Optimized</h6>
            </div>
            <div className='flex gap-2 py-1'>
              <IoCheckmarkOutline className='text-gray-600 text-lg tracking-wide transition-all duration-500 group-hover:text-white' />
              <h6 className='text-gray-600 text-sm tracking-wide transition-all duration-500 group-hover:text-white'>Free Server Domain</h6>
            </div>
            <div className='flex gap-2 py-1'>
              <IoCheckmarkOutline className='text-gray-600 text-lg tracking-wide transition-all duration-500 group-hover:text-white' />
              <h6 className='text-gray-600 text-sm tracking-wide transition-all duration-500 group-hover:text-white'>Mobile Optimized</h6>
            </div>
            <div className='flex gap-2 py-1'>
              <IoCheckmarkOutline className='text-gray-600 text-lg tracking-wide transition-all duration-500 group-hover:text-white' />
              <h6 className='text-gray-600 text-sm tracking-wide transition-all duration-500 group-hover:text-white'>Outstanding Support</h6>
            </div>
          </div>
          <div className='pt-7'>
            <Button color='bg-[#FF602E]' title='Purchase' />
          </div>
        </div>
      </div>
    </div>
  )
}
