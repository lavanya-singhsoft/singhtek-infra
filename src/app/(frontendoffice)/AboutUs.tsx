/* eslint-disable jsx-a11y/alt-text */
"use client"

import React from 'react'
import { useState, useEffect } from 'react'

import ProgressBar from "@ramonak/react-progress-bar";
import Homesection from './components/Homesection';
import Projectup from './aboutus/Projectup';
import Cardsproject from './components/cards/Cardsproject';


export default function AboutUs() {
  return (
    <div>

      {/* Homesection */}
      <section>
        <Homesection
          img='url("Aboutus/Homesection.svg")'
          heading='explore the features'
          title='About Me'
          para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio perspiciatis cupiditate  esse id impedit, quaerat nobis dicta aliquam voluptatem. '

        />
      </section>
      {/* Project Up section */}
      <section >
        <Projectup />
      </section>

      {/* Project Section */}
      <section className='bg-blue-950'>
        <div className=''>
          {/* <div className='flex lg:pt-20 lg:px-60 md:pt-20 md:px-10 '>
            <Letter letter='P' />
            <Letter letter='R' />
            <Letter letter='O' />
            <Letter letter='J' />
            <Letter letter='E' />
            <Letter letter='C' />
            <Letter letter='T' />
            <Letter letter='S' />
          </div> */}
        </div>
        <div className='flex flex-col items-center lg:px-80 lg:py-10 md:px-40 sm:px-20'>
          <h1 className=' uppercase text-white font-bold text-7xl'>Projects</h1>
        </div>
        <div className='lg:flex md:flex sm:flex-none sm:px-24 px-2 justify-center '>
          <div className='pt-10' >
            <Cardsproject
              id={1}
              img={<img src='/project_section/p1.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={2}
              img={<img src='/project_section/p2.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={3}
              img={<img src='/project_section/p3.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
        </div>
        <div className='lg:flex md:flex sm:flex-none sm:px-24 px-2 justify-center'>
          <div className='pt-10 '>
            <Cardsproject
              id={4}
              img={<img src='/project_section/p4.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={5}
              img={<img src='/project_section/p5.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
          <div className='pt-10 '>
            <Cardsproject
              id={6}
              img={<img src='/project_section/p6.jpg' />}
              heading={'Contemporary Villa'} />
          </div>
        </div>
      </section>

      {/* Progress bar section */}
      <section>
        <div className='flex justify-center flex-wrap py-20'>
          <div className='xl:h-[50vh] xl:w-[50vh] lg:h-[50vh] lg:w-[50vh] object-cover pt-4'>
            <img src="Aboutus/teamwork.svg" alt="teamwork" />
          </div>
          <div className='xl:pl-16 lg:pl-6 sm:pl-20 pl-5 pt-4'>
            <h6 className='text-xs text-gray-600 tracking-tighter uppercase'>explore the features</h6>
            <h1 className='xl:text-6xl sm:text-5xl text-4xl text-blue-950 font-semibold'>Effective Teamwork</h1>
            <div className='flex-col mt-7 py-3'>
              <h6 className='text-xs text-gray-600 tracking-tighter uppercase pb-2'>interior design</h6>

              <ProgressBar
                completed={60}
                bgColor="#FF602E"
                height="18px"
                labelColor="#ffffff"
                padding="2"
                customLabel="60%"
                animateOnRender
              />

            </div>
            <div className='flex-col py-3'>
              <h6 className='text-xs text-gray-600 tracking-tighter uppercase pb-2'>architecture</h6>

              <ProgressBar
                completed={71}
                bgColor="#FF602E"
                height="18px"
                labelColor="#ffffff"
                padding="2"
                customLabel="71%"
                animateOnRender
              />

            </div>
            <div className='flex-col py-3'>
              <h6 className='text-xs text-gray-600 tracking-tighter uppercase pb-2'>construction</h6>

              <ProgressBar
                completed={55}
                bgColor="#FF602E"
                height="18px"
                labelColor="#ffffff"
                padding="2"
                customLabel="55%"
                animateOnRender
              />

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
