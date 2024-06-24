import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

export default function Officeadd() {
    return (
        <div className='py-20 flex flex-wrap justify-center gap-20 '>
            {/* office 1 */}
            <div>
                <h1 className='text-3xl font-bold text-blue-950'>Office in India</h1>
                <div className='flex text-xl '>
                    <div className='pt-6'>
                        <IoLocationSharp className='text-gray-800 text-2xl transition-all duration-500 hover:text-[#FF602E]' />
                    </div>
                    <div className=' p-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            7300-7398 Colonial Rd, <br />
                            Brooklyn, NY 11209
                        </p>
                    </div>
                </div>
                <div className='flex text-xl'>
                    <FiPhoneCall className='text-gray-800 text-lg transition-all duration-500 hover:text-[#FF602E]' />
                    <div className=' pl-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            +91- 9876543210
                        </p>
                    </div>  
                </div>
                <div className='flex text-xl'>
                    <div className='pt-5'>
                        <MdAlternateEmail className='text-gray-800 text-lg transition-all duration-500 hover:text-[#FF602E]' />
                    </div>
                    <div className=' pl-4 pt-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            singhtek@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            {/* office 2 */}
            <div>
                <h1 className='text-3xl font-bold text-blue-950'>Office in India</h1>
                <div className='flex text-xl '>
                    <div className='pt-6'>
                        <IoLocationSharp className='text-gray-800 text-2xl transition-all duration-500 hover:text-[#FF602E]' />
                    </div>
                    <div className=' p-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            7300-7398 Colonial Rd, <br />
                            Brooklyn, NY 11209
                        </p>
                    </div>
                </div>
                <div className='flex text-xl '>
                    <FiPhoneCall className='text-gray-800 text-lg transition-all duration-500 hover:text-[#FF602E]' />
                    <div className=' pl-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            +91- 9876543210
                        </p>
                    </div>  
                </div>
                <div className='flex text-xl '>
                    <div className='pt-5'>
                        <MdAlternateEmail className='text-gray-800 text-lg transition-all duration-500 hover:text-[#FF602E]' />
                    </div>
                    <div className=' pl-4 pt-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            singhtek@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            {/* office 3 */}
            <div>
                <h1 className='text-3xl font-bold text-blue-950'>Office in India</h1>
                <div className='flex text-xl '>
                    <div className='pt-6'>
                        <IoLocationSharp className='text-gray-800 text-2xl transition-all duration-500 hover:text-[#FF602E]' />
                    </div>
                    <div className=' p-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            7300-7398 Colonial Rd, <br />
                            Brooklyn, NY 11209
                        </p>
                    </div>
                </div>
                <div className='flex text-xl '>
                    <FiPhoneCall className='text-gray-800 text-lg transition-all duration-500 hover:text-[#FF602E]' />
                    <div className=' pl-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            +91- 9876543210
                        </p>
                    </div>  
                </div>
                <div className='flex text-xl '>
                    <div className='pt-5'>
                        <MdAlternateEmail className='text-gray-800 text-lg transition-all duration-500 hover:text-[#FF602E]' />
                    </div>
                    <div className=' pl-4 pt-4'>
                        <p className='text-gray-500 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            singhtek@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
