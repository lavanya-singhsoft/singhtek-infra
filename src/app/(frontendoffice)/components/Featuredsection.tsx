import React from 'react'

export default function Featuredsection() {
  return (
    <div className=' flex flex-col items-center lg:py-10 md:py-6 sm:py-3 py-2 sm:ml-80 ml-52'>
        <div className=' 2xl:p-20 xl:p-20 lg:p-14 md:p-1 sm:p-10 p-4 w-[35vw] bg-[#FF602E] rounded-3xl'>
          <h1 className=' uppercase text-xs text-white font-semibold text-start md:tracking-wider sm:tracking-tighter tracking-tighter'>Explore the features</h1>
          <p className=' py-3 text-white font-semibold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl text-sm'>Full Project Management</p>
          <p className='hidden md:block pt-5 xl:text-lg lg:text-md md:text-md sm:text-sm text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet, error distinctio in fuga </p>
          <button className=' mt-8 bg-white md:px-8 md:py-3 sm:px-5 sm:pt-3  text-[#FF602E] text-base tracking-wider hover:shadow-xl shadow-orange-500 rounded-full'>Read More</button>
        </div>

    </div>
  )
}
