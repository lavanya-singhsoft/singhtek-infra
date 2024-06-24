import React from 'react'

export default function Latestnews({img}:any) {
  return (
    <div>
       <div className=' p-5 '>
                <div className=" group max-w-[330px] bg-white border-b-4 border-[#FF602E]">
                    <div className=' p-0 max-w-lg transition-all duration-500 group-hover:animate-pulse'>
                        {img}
                    </div>
                    <div className='p-6'>
                        <h1 className=' uppercase text-sm text-gray-700'>5. December. 2018</h1>
                        <p className='pt-3 text-2xl text-blue-950 font-bold transition-all duration-500 group-hover:text-[#FF602E]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit </p>
                        <div className='flex pt-4'>
                            <p className='pt-6 mr-3 text-blue-950'>Read More</p>
                            <button className=" mt-2 px-4 py-3 rounded-lg text-blue-950 text-xl text-center transition-all duration-500 group-hover:bg-[#FF602E] group-hover:text-white">
                                +
                            </button>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}
