import React from 'react';
import { IoMdShare } from "react-icons/io";

export default function Cardpeople({ img, role, name }: any) {
    return (
        <div>
            <div className='p-6  h-auto w-auto'>
                <div className=' group h-[100%] w-[100%] '>
                    <div className=' size-[40vh] '>
                        {img}
                    </div>
                    <div className='flex flex-col '>
                    <div className=''>
                    <button className='bg-[#FF602E] p-3 text-white '>
                        <IoMdShare />
                    </button>
                    </div>
                    <div className=''>
                        <h5 className=" uppercase tracking-wider text-transparent transition-all duration-500  group-hover:text-white">{role}</h5>
                        <p className=" text-4xl font-bold text-transparent transition-all duration-500  group-hover:text-white">{name}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
