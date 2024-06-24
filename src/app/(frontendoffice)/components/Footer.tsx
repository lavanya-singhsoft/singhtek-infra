import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiUpArrowAlt } from "react-icons/bi";

export default function Footer() {
    return (
        <div className='bg-[#0a1229]'>
            <div className=' flex flex-wrap gap-5 justify-center pt-10'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white'>Build with SinghtekInfra</h1>
                    <p className=' pt-4 xl:text-[14px] lg:text-[11px] md:text-[10px] text-gray-400 tracking-tighter '>Get Singhtek and discover streamlined <br /> website construction today! Powerful<br /> elements, tons of flexible layouts and <br />more inside</p>
                    <div className='flex xl:text-[14px] lg:text-[11px] md:text-[10px] text-white'>
                        <div className='pt-6'>
                            <FaRegClock className='text-white transition-all duration-500 hover:text-[#FF602E]' />
                        </div>
                        <div className='p-4'>
                            <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                                Mon - Sat 9:30 - 18:30
                            </p>
                            <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                                Sunday - CLOSED
                            </p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-xl font-bold text-white'>Our Services</h1>
                    <div className='pt-4 xl:text-[14px] lg:text-[11px] md:text-[10px] '>
                        <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            Chemical Engineering Projects
                        </p>
                    </div>
                    <div className='pt-2 xl:text-[14px] lg:text-[11px] md:text-[10px]'>
                        <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            Mining Engineering Construction
                        </p>
                    </div>
                    <div className='pt-2 xl:text-[14px] lg:text-[11px] md:text-[10px]'>
                        <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            Engineering Welding Engineering
                        </p>
                    </div>
                    <div className='pt-2 xl:text-[14px] lg:text-[11px] md:text-[10px]'>
                        <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            Welding Engineering
                        </p>
                    </div>
                    <div className='pt-2 xl:text-[14px] lg:text-[11px] md:text-[10px]'>
                        <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                            Space Program XYZ
                        </p>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-xl font-bold text-white'>Office in India</h1>
                    <div className='flex xl:text-[14px] lg:text-[11px] md:text-[10px]'>
                        <div className='pt-6 text-lg'>
                            <IoLocationSharp className='text-white transition-all duration-500 hover:text-[#FF602E]' />
                        </div>
                        <div className=' p-4'>
                            <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                                7300-7398 Colonial Rd, <br />
                                Brooklyn, NY 11209
                            </p>
                        </div>
                    </div>
                    <div className='flex xl:text-[14px] lg:text-[11px] md:text-[10px]'>
                        <FiPhoneCall className='text-white transition-all duration-500 hover:text-[#FF602E]' />
                        <div className=' pl-4'>
                            <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                                +91- 9876543210
                            </p>
                        </div>
                    </div>
                    <div className='flex xl:text-[14px] lg:text-[11px] md:text-[10px]'>
                        <div className='pt-5'>
                            <MdAlternateEmail className='text-white transition-all duration-500 hover:text-[#FF602E]' />
                        </div>
                        <div className=' pl-4 pt-4'>
                            <p className='text-gray-400 tracking-tighter transition-all duration-500 hover:text-[#FF602E]'>
                                singhtek@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-xl font-bold text-white'>Our Locations</h1>
                    <div className='p-2'>
                        <img className=' mt-4' src="footerlocation.png" alt="Location" />
                    </div>
                </div>
            </div>

            <div className='lg:flex justify-items-end place-content-between border border-gray-800 '>
                <div className='lg:pl-16 md:pl-44'>
                    <img className='h-20 w-84 object-cover' src='logo2.png'></img>
                </div>
                <div className='lg:pt-8 md:pt-2 md:pb-4 sm:pt-2 sm:pb-2 py-2 flex lg:justify-items-end lg:place-content-end md:justify-center sm:justify-center justify-center'>
                    <p className='text-gray-400 tracking-tight text-xs '>© 2024 Singhtek. All rights reserved</p>
                </div>
                <div className='flex lg:pt-0 lg:pb-0 md:pb-4 sm:pb-4 pb-4 lg:justify-items-end lg:place-content-end md:justify-center sm:justify-center justify-center text-white transition-all duration-500 hover:text-[#FF602E]'>
                    <div className=' pt-6 px-5 border border-gray-800 text-white transition-all duration-500 hover:text-[#FF602E] '>
                        <button>
                            <FiFacebook className='text-2xl' />
                        </button>
                    </div>
                    <div className='pt-6 px-5 border border-gray-800 text-white transition-all duration-500 hover:text-[#FF602E] '>
                        <button>
                            <FaSquareTwitter className='text-2xl ' />
                        </button>
                    </div>
                    <div className=' pt-6 px-5 border border-gray-800 text-white transition-all duration-500 hover:text-[#FF602E]'>
                        <button>
                            <FaInstagram className='text-2xl' />
                        </button>
                    </div>
                    <div className=' pt-6 px-5 border border-gray-800 text-white transition-all duration-500 hover:text-[#FF602E]'>
                        <button>
                            <FaLinkedinIn className='text-xl' />
                        </button>
                    </div>
                </div>
                <div className=''>

                </div>
                <div className='fixed bottom-0 end-0 xl:p-5 lg:pb-10 p-5 z-50 hover:animate-bounce '>
                    <button className='rounded-lg py-3 px-3 text-xl bg-[#FF602E]'>
                        <a href="#"><BiUpArrowAlt className='text-white' /></a>
                    </button>
                </div>

            </div>


        </div >
    )
}