import React from 'react'

export default function Homesection({img,heading,title,para}:any) {
  return (
    <div>
    <section className='bg-cover' style={{ backgroundImage: `${img}` }}>

        <div className='flex flex-col lg:py-40 lg:px-40 md:py-40 md:px-12 sm:py-52 sm:px-10 py-52 '>
            <div className=' absolute md:h-[62vh] md:w-[62vh] sm:h-[58vh] sm:w-[58vh] h-[38vh] w-[38vh] object-cover -mt-12 animated-aboutus-schedule'>
                <img className='' src='//wilmer.qodeinteractive.com/wp-content/uploads/2019/02/main-home-rev-slider-img-04.png ' />
            </div>
            <h4 className=' text-white text-sm font-semibold uppercase tracking-tighter py-1 animated-home-aboutus'>{heading}</h4>
            <h1 className='  text-white font-bold uppercase lg:text-6xl md:text-5xl sm:text-4xl text-2xl animated-home-aboutus'>{title}</h1>
            <p className=' text-white py-2 animated-home-aboutus'>{para}</p>

        </div>

    </section>
</div>
  )
}
