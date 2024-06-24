import React from 'react'
import Button from '../components/Button'




export default function Projectup() {
    return (
        <div>

            <section className='bg-gray-200 pb-5 pt-10'>
                <div className='xl:ml-[48%] xl:mt-64 lg:ml-[52%] lg:mt-24 md:ml-[35%] md:mt-[42%] sm:ml-[35%] sm:mt-[56%] ml-[30%] mt-[68%] absolute z-20 animated-div'>
                    <div className='uppercase text-xs md:text-[10px] text-gray-600 tracking-tight'>explore the feature</div>
                    <div className='lg:py-2 lg:text-5xl md:text-2xl text-blue-950 font-semibold'>Project Management</div>
                    <div className='hidden lg:block text-xs  text-gray-600 tracking-tight'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates, consectetur repellat</p>
                        <p>cupiditate nam facere aspernatur cumque odio eum fuga.</p>
                    </div>
                    <div className='lg:py-3'>
                        <Button color='bg-[#FF602E]' title='Read More' />
                    </div>
                </div>
                <div className='lg:h-72 lg:w-72 md:h-44 md:w-44 sm:h-44 sm:w-44 h-44 w-44 object-cover xl:ml-[28%] xl:mt-[12%] lg:ml-52 lg:mt-44 md:ml-80 md:mt-44 sm:ml-64 sm:mt-40 ml-36 mt-44 absolute z-20 animated-pen'>
                    <img className='' src="/Aboutus/homedown2.png" alt="pen" />
                </div>
                <div className='absolute xl:ml-[18%] xl:mt-[5%] lg:ml-14 lg:mt-24 md:ml-44 md:mt-24 sm:ml-28 sm:mt-20 ml-1 mt-24 lg:w-[60vh] lg:h-[60vh] md:w-[40vh] md:h-[40vh] sm:h-[40vh] sm:w-[40vh] h-[40vh] w-[40vh] object-cover z-10 animated-tab'>
                    <img className='' src="/Aboutus/homedown1.png" alt="tab" />
                </div>
                <div className='sm:ml-[40%] ml-[30%]  h-64 w-64 object-cover animated-design'>
                    <img className='' src="/Aboutus/homedown3.png" alt="design2" />
                </div>
                <div className='hidden md:block ml-[10%] h-80 w-80 object-cover absolute animated-design'>
                    <img src="/Aboutus/homedown4.png" alt="design3" />
                </div>
                <div className='xl:ml-[82%] lg:ml-[75%] md:ml-[67%] sm:ml-[58%] ml-[30%] h-64 w-64 object-cover animated-design'>
                    <img src="/Aboutus/homedown5.png" alt="design5" />
                </div>
                <div>
                </div>
            </section>

        </div>
    )
}

