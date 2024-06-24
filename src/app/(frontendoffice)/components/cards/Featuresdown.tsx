import React from 'react'
import { FaQuoteRight } from "react-icons/fa";

export default function Featuresdown({ img, role, name }: any) {
  return (
    <div className='pb-6'>
      <div className='p-4'>
        <div className=' group max-w-[50vh] border-b-4 border-[#FF602E] transition-all duration-500 group-hover:border-blue-950'>
          <div className=" p-4 max-h-[27vh] flex bg-white border border-b-0 max-w-lg text-blue-950 transition-all duration-500 border-gray-200 group-hover:bg-blue-950  group-hover:text-white">
            <div className='p-4 '>
              {img}
            </div>
            <div className='py-4 size-64'>
              <h5 className=" uppercase text-sm text-start tracking-tight transition-all duration-500 text-gray-500 group-hover:text-white">{role}</h5>
              <p className=" text-2xl font-bold ">{name}</p>
              <p className=' lg:text-sm md:text-sm sm:text-xs text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga eos itaque eum ducimus natus possimus ab amet, odit, voluptatum maiores</p>
            </div>
            <div className='group-hover:text-[#FF602E] transition-all duration-500'>
            <FaQuoteRight />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
