import React from 'react'

export default function Cardsservices({ heading, title }: any) {
  return (
    <div className='p-5'>
      <div className=' group border-b-4 border-[#FF602E]'>
        <div className="w-[260px] h-[250px] bg-white border border-b-0 text-blue-950 transition-all duration-500 border-gray-200 group-hover:bg-blue-950  group-hover:text-white">
          <img src="service_images/cone.jfif" alt="" />
          <div className='flex gap-3'>
            <div className='p-2 pt-8 mt-2'>
              <h5 className="uppercase text-xs text-start tracking-tight">{heading}</h5>
              <p className="text-xl  font-bold min-w-fit">{title}</p>
            </div>
            <div className='-mt-32 ml-2'>
              <button className="py-2 px-4 rounded-full text-2xl transition-all duration-500 group-hover:bg-[#FF602E] text-white ">
                +
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
