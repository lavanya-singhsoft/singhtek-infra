import React from 'react'
import Cardfullproj from './cards/Cardfullproj'

export default function Fullproj() {
    return (
        <div className=" py-20">
            <div className=' grid place-items-center md:grid-cols-1 lg:grid-cols-3 '>
                <div className='max-w-80 pt-4'>
                    <h6 className='text-gray-400 text-xs tracking-tight uppercase'>explore the features</h6>
                    <h1 className='text-blue-950 text-5xl font-semibold'>Full Project Management Services</h1>
                </div>
                <div>
                    <Cardfullproj
                        img={<img src='Services/icon1.png' alt='icon1' />}
                        title='Explore the features'
                        heading='General Contracting'
                        para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, velit?'
                    />
                </div>
                <div>
                    <Cardfullproj
                        img={<img src='Services/icon2.png' alt='icon2' />}
                        title='Explore the features'
                        heading='General Contracting'
                        para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, velit?'
                    />
                </div>
            </div>
            <div className='grid place-items-center md:grid-cols-1 lg:grid-cols-3  '>
                <div>
                    <Cardfullproj
                        img={<img src='Services/icon3.png' alt='icon3' />}
                        title='Explore the features'
                        heading='General Contracting'
                        para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, velit?'
                    />
                </div>
                <div>
                    <Cardfullproj
                        img={<img src='Services/icon4.png' alt='icon4' />}
                        title='Explore the features'
                        heading='General Contracting'
                        para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, velit?'
                    />
                </div>
                <div>
                    <Cardfullproj
                        img={<img src='Services/icon5.png' alt='icon5' />}
                        title='Explore the features'
                        heading='General Contracting'
                        para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, velit?'
                    />
                </div>
            </div>
        </div>
    )
}
