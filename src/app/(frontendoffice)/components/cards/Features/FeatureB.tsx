import React from 'react'

export default function FeatureB({img,heading} : any) {
  return (
    <div className='lg:p-4 md:p-1 sm:p-5 p-5 z-10'>
    <div className='group border-b-4 max-w-xs border-[#FF602E]'>
        <div className=' p-3 max-w-sm border border-slate-200  w-80 h-80 object-cover '>
            <div className='lg:p-8 md:p-8 sm:p-8 p-8'>
                <div className=' lg:ml-20 md:ml-24 sm:ml-20 ml-20 place-item-center transition-all duration-500 group-hover:animate-bounce lg:w-20 lg:h-20 md:w-12 md:h-12 sm:h-20 sm:w-20 h-16 w-16 object-cover'>
                    {img}
                </div>
                <h1 className=' mt-4 mb-2 uppercase text-xs tracking-wider text-gray-500 text-center' > explore the features</h1>
                <p className='text-blue-950 transition-all duration-500 hover:text-[#FF602E] lg:text-3xl md:text-xl font-semibold tracking-tighter text-center'>{heading}</p>
                <p className='text-center lg:text-md text-gray-500 lg:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit </p>
            </div>
        </div>
    </div>
</div>
  )
}
