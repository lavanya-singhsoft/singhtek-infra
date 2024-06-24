import React from 'react'
import RadialProgress from './Radialprogress'




export default function Featurepercent({ title, heading , value , color }: any) {
  return (
    <div>
      <div className='flex sm:place-content-center sm:gap-12 gap-8 -ml-24'>
        <div className='pt-8  '>
        <RadialProgress value={value} color={color} />
        </div>
        <div className=''>
          <h1 className=' uppercase text-gray-500 tracking-wider '>{title}</h1>
          <h1 className='text-blue-950 font-bold text-5xl'>{heading}</h1>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet </p>
        </div>
      </div>
    </div>
  )
}
