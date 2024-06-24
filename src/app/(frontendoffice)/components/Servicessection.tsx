import React from 'react'

export default function Servicessection() {
    return (
        <div className=''>
            <section className='pt-28 pb-52'>

                <div className='flex flex-wrap justify-center gap-16 p-2 relative'>
                    <div className='sm:h-[250px] sm:w-[500px] h-[200px] w-[400px] object-cover hover-overlay' >
                        <img  src="/Service_images/Graphic-tablet.avif" alt="Service Section" />
                    </div>
                    <div className='sm:w-[500px] w-[400px] z-10'>
                        <h1 className=' uppercase text-sm text-gray-600 text-start tracking-wider'>explore the feature</h1>
                        <p className=' lg:pt-3 md:py-3 sm:py-2 py-2 text-blue-950 font-semibold lg:text-6xl md:text-4xl sm:text-3xl text-2xl'>Full Project Management</p>
                        <p className=' py-3 text-sm text-start text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci architecto corrupti illum consectetur est perferendis corporis fugit dolore? Libero dicta dolores fugiat numquam amet.</p>
                        <button className=' bg-[#FF602E] px-3 py-2 text-white text-base tracking-wider hover:shadow-xl shadow-orange-500 rounded-lg '>Read More</button>
                    </div>
                </div>
            </section>

        </div>  
    )
}
