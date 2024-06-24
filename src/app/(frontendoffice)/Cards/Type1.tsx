import React from 'react'

export default function Type1({ img, title, para }: any) {
    return (
        <span className='h-fit'>
            <div className='group h-auto w-96 object-cover'>
                <div>
                    {/* <img src="Blog/Type1/a.jpg" alt="longicona" /> */}
                    {img}
                </div>
                {/* Card content */}
                <div>
                    <div className='flex pt-4 text-sm text-gray-600 tracking-widest '>
                        <h6 className=' transition-all duration-500 hover:text-[#FF602E]'>
                            18. December 2024
                        </h6>
                        <h6> / </h6>
                        <h6 className=' transition-all duration-500 hover:text-[#FF602E]'>Materials</h6>
                        <h6>/</h6>
                        <h6 className=' transition-all duration-500 hover:text-[#FF602E]'>Design</h6>
                    </div>

                    <div>
                        <h6 className='pt-2 text-2xl text-blue-950 font-semibold transition-all duration-500 group-hover:text-[#FF602E] '>{title}</h6>
                    </div>
                    <div>
                        <p className='pt-3 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quidem.</p>
                    </  div>
                    <div className='flex gap-5 pt-4'>
                        <h6 className='text-sm text-blue-950 font-semibold pt-2'>Read More</h6>
                        <div>
                            <button className=' py-2 px-4    transition-all duration-500 group-hover:bg-[#FF602E] rounded-full' >
                                <h6 className='text-blue-950 font-semibold group-hover:text-white'>+</h6>   
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    )
}
