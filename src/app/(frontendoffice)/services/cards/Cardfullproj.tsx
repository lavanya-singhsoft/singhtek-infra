import React from 'react'
import { PiArrowArcLeftLight } from 'react-icons/pi'

export default function Cardfullproj({img,title,heading,para} : any) {
  return (
    <div className='p-4 max-w-80'>
        <div className='pb-6'>{img}</div>
        <div className='text-gray-500 text-xs tracking-tighter uppercase py-2'>{title}</div>
        <div className='text-blue-950 text-xl font-semibold pb-2'>{heading}</div>
        <div className='text-gray-500 text-sm tracking-tighter'>{para}</div>
    </div>
  )
}
