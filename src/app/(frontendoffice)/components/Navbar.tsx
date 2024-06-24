"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "../../globals.css"

import Offcanvas from './Offcanvas';
import { FaAngleRight } from "react-icons/fa";

export default function Navbar() {
  const [show, SetShow] = useState(false)
  const handleClick = () => {
    SetShow(prev => !prev);
    console.log(show);
  }

  const [open, setOpen] = useState(false)


  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth >= 768) {
        SetShow(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [activeLink, setActiveLink] = useState('');

  const handleActive = (link: any) => {
    console.log("Activating link:", link);
    setActiveLink(link);
  };

  const [isLogin, setIsLogin] = useState(true); 


  return (
    <>
      <section className='bg-[#FF602E] border text-white '>
        <div className='hidden lg:block'>
          <div className='flex place-content-between'>
            <div className='flex justify-start p-2 gap-10'>
              <div className='flex gap-3'>
                <div className=''>
                  <FiPhoneCall />
                </div>
                <div>
                  <p className='text-xs text-white tracking-tight '>+91-9876543210</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <div className=''>
                  <IoIosMail />
                </div>
                <div className=''>
                  <p className='text-xs text-white tracking-tight'>singhtek@gmail.com</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <div className=''>
                  <FaRegClock />
                </div>
                <div className=''>
                  <p className=' text-xs text-white tracking-tight'>Mon-Sat 9:30-18:30 , Sunday-CLOSED</p>
                </div>
              </div>
            </div>
            <div className='flex justify-items-end place-content-end gap-8 p-2'>
              <Link href="singhtek.com" target="_blank">
                <FiFacebook />
              </Link>
              <FaSquareTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

        </div>


      </section>


      <div className=' sticky top-0 shadow-xl z-50 '>
        <div className='pr-10 items-center flex justify-around h-[9vh]  bg-white z-50'>
          <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className=' w-[30%] flex lg:justify-around lg:items-center md:justify-around md:min-w-screen-sm'>
              <img src='logo2.png' alt='Singhtek' />
            </div>
            <button onClick={handleClick} data-collapse-toggle="navbar-default" type="button" className={`inline-flex items-center w-10 h-10 justify-center text-sm text-[#FF602E] rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200`}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`hidden w-full md:block md:w-auto`} id="navbar-default">
              <ul className="font-medium flex flex-row md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                <li className=' transition-all duration-500 hover:text-[#FF602E] hover:border-[#FF602E]'>
                  <Link href="/" onClick={() => handleActive('home')}
                    className={`no-underline md:bg-transparent md:hover:bg-transparent md:p-0  ${activeLink == 'home' ? 'active-class' : ''}`}>Home</Link>
                </li>
                <li className='transition-all duration-500 hover:text-[#FF602E] hover:border-[#FF602E]'>
                  <Link href="/aboutus" onClick={() => handleActive('about')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent   md:p-0 ${activeLink === 'about' ? 'active-class' : ''}`}
                    target='_self'>
                    About Us
                  </Link>
                </li>
                <li className='transition-all duration-500 hover:text-[#FF602E]  hover:border-[#FF602E]'>
                  <Link href="/contactus" onClick={() => handleActive('contact')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent   md:p-0 ${activeLink === 'contact' ? 'active-class' : ''}`}
                    target='_self'>
                    Contact Us
                  </Link>
                </li>
                <li className='transition-all duration-500 hover:text-[#FF602E]  hover:border-[#FF602E]'>
                  <Link href="/blog" onClick={() => handleActive('blog')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${activeLink === 'blog' ? 'active-class' : ''}`}
                    target='_self'>
                    Blog
                  </Link>
                </li>
                <li className='transition-all duration-500 hover:text-[#FF602E] hover:border-[#FF602E]'>
                  <Link href="/services" onClick={() => handleActive('services')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent   md:p-0 ${activeLink === 'services' ? 'active-class' : ''}`}
                    target='_self'>
                    Services
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className='  hidden lg:flex justify-around items-center min-w-fit py-12'>
            <div className='bg-[#FF602E] px-3 py-2 rounded-full text-white font-semibold' onClick={() => setOpen(!open)}>
              Getting Start
            </div>
          </div>

          <div>
            <div className='bg-[#FF602E] px-3 py-2 rounded-lg text-white font-semibold hidden md:block lg:hidden' onClick={() => setOpen(!open)}>
              <FaAngleRight />
            </div>
          </div>
        </div>

        {show &&
          <div>
            <div className={`w-full h-auto bg-white shadow-lg rounded-b-lg z-50`} id="navbar-default">
              <ul className="flex flex-col justify-center items-center pb-2">
                <li className='py-3 text-gray-800 hover:text-[#FF602E]'>
                  <Link href="/" onClick={() => handleActive('home')}
                    className={`no-underline md:bg-transparent  md:hover:bg-transparent md:p-0 ${activeLink == 'home' ? 'active-class' : ''}`}>Home</Link>
                </li>
                <li className='py-3 text-gray-800 hover:text-[#FF602E]'>
                  <Link href="/aboutus" onClick={() => handleActive('about')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${activeLink === 'about' ? 'active-class' : ''}`}
                    target='_self'>
                    About Us
                  </Link>
                </li>
                <li className='py-3 text-gray-800 hover:text-[#FF602E]'>
                  <Link href="/contactus" onClick={() => handleActive('contact')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${activeLink === 'contact' ? 'active-class' : ''}`}
                    target='_self'>
                    Contact Us
                  </Link>
                </li>
                <li className='py-3 text-gray-800 hover:text-[#FF602E]'>
                <Link href="/blog" onClick={() => handleActive('blog')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${activeLink === 'blog' ? 'active-class' : ''}`}
                    target='_self'>
                    Blog
                  </Link>
                </li>
                <li className='py-3 text-gray-800 hover:text-[#FF602E]'>
                  <Link href="/services" onClick={() => handleActive('services')}
                    className={`no-underline hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${activeLink === 'services' ? 'active-class' : ''}`}
                    target='_self'>
                    Services
                  </Link>
                </li>
                <div className='bg-[#FF602E] px-3 py-2 rounded-full text-white font-semibold w-32' onClick={() => setOpen(!open)}>
                  Getting Start
                </div>
              </ul>
            </div>



          </div>
        }
      </div >

      <Offcanvas isOpen={open} onClose={() => setOpen(false)}>
      <>
        <div className='py-12'>
          <div className='xl:pl-20 lg:pl-16 md:pl-16 sm:pl-14 pl-20'>
            <button
              className='flex-col justify-center bg-[#FF602E] py-3 px-4 rounded-full w-20 text-white font-semibold'
              onClick={() => setIsLogin(true)} // Switch to login form
            >
              Login
            </button>
            <button
              className='flex-col justify-center bg-[#FF602E] py-3 px-4 rounded-full w-20 text-white font-semibold ml-4'
              onClick={() => setIsLogin(false)} // Switch to signup form
            >
              Signup
            </button>
          </div>
          <div className='place-content-center'>
            {isLogin ? (
              <div>
                <div className='pt-10'>
                  <label className='text-blue-950'>UserName: </label>
                  <input placeholder='Enter your username' className='border rounded-full' type='text' />
                </div>
                <div className='pt-10'>
                  <label className='text-blue-950'>Your Email: </label>
                  <input placeholder='Enter your Email' className='border rounded-full' type='email' />
                </div>
                <div className='pt-10'>
                  <label className='text-blue-950'>Password: </label>
                  <input placeholder='Enter your password' minLength={6} className='border rounded-full' type='password' />
                </div>
              </div>
            ) : (
              <div>
                <div className='pt-10'>
                  <label className='text-blue-950'>Your Email: </label>
                  <input placeholder='Enter your Email' className='border rounded-full' type='email' />
                </div>
                <div className='pt-10'>
                  <label className='text-blue-950'>Username: </label>
                  <input placeholder='Enter your username' className='border rounded-full' type='email' />
                </div>
                <div className='pt-10'>
                  <label className='text-blue-950'>Password: </label>
                  <input placeholder='Enter your password' minLength={6} className='border rounded-full' type='password' />
                </div>
                <div className='pt-10'>
                  <label className='text-blue-950'>Confirm Password: </label>
                  <input placeholder='Confirm your password' minLength={6} className='border rounded-full' type='password' />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <h6 className='text-gray-400 text-xs'>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </h6>
          <button
            className='text-blue-500'
            onClick={() => setIsLogin(!isLogin)} // Toggle between login and signup
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </div>
      </>
    </Offcanvas>
    </>
  )
}
